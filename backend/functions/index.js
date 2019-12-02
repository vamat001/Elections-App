const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const firebase = require('firebase');
const cors = require('cors');
const config = require('./config');
const serviceAccount = require('./elections_service_account.json');
const  bodyParser = require("body-parser");
const fs = require('fs');

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
});
const app = express();
app.use(cors());
const db = admin.firestore();
firebase.initializeApp(config);

app.get("/getAllPositions", (req, res) => {
   //AllPositions
   admin.firestore().collection('undergradCandidates').get().then((data) => {
      let users = [];
      data.forEach((doc) => {
         users.push(doc.data());
      });
      return res.json(users);
   })
   .catch((err) => console.error(err));
})

app.get("/getAllVotes", (req, res) => {
   //AllPositions
   admin.firestore().collection('undergradVotes').get().then((data) => {
      let users = [];
      data.forEach((doc) => {
         users.push(doc.data());
      });
      return res.json(users);
   })
   .catch((err) => console.error(err));
})

app.post("/addDBData", (req, res) => {
   let rawdata = fs.readFileSync('../test_input.json');
   let student = JSON.parse(rawdata);
   const db = firebase.firestore();
   var batch = db.batch();

   for (var key in student["docs"]) {
      if (student["docs"].hasOwnProperty(key)) {
         let ref = db.collection(student["collection"]).doc(key);
         batch.set(ref, student["docs"][key]);
      }
   }
    batch.commit().then(function () {
        console.count('wrote batch');
        res.send("batch committed");
    }).catch(function(error) {
        console.log("batch commit failed: ", error);
        res.send("Batch commit failed");
   });
})
app.get("/NewReferendums", (req, res) => {
   admin.firestore().collection('NewReferendums').get().then((data) => {
      let users = [];
      data.forEach((doc) => {
         users.push(doc.data());
      });
      return res.json(users);
   })
   .catch((err) => console.error(err));
})
app.get("/unapprovedCandidates", (req, res) => {
   admin.firestore().collection('unapprovedCandidates').get().then((data) => {
      let users = [];
      data.forEach((doc) => {
         users.push(doc.data());
      });
      return res.json(users);
   })
   .catch((err) => console.error(err));
})

const isEmpty = (string) => {
   if(string.trim() === ''){
      return true;
   }else{
      return false;
   }
};

const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)){
     return true;
  }else {
     return false
  }
};

app.post('/adminSignup', (req, res) => {
   let token, userID, userData;

   const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword
   };

   let errors = {};
   if(isEmpty(newUser.email)){
      errors.email = 'Must not be empty';
   }else if(!isEmail(newUser.email)){
      errors.email = 'Must be a valid email address';
   }
   if(isEmpty(newUser.password)){
      errors.password = 'Must not be empty';
   }
   if(newUser.password !== newUser.confirmPassword){
      errors.confirmPassword = 'Passwords must match';
   }
   if(Object.keys(errors).length > 0){
      return res.status(400).json(errors);
   }

   firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(data => {
         userData = data.user;
         userID = data.user.uid;
         const claims = {
            admin: true
         };
         admin.auth().setCustomUserClaims(userID, {admin: true});
         return data.user.getIdToken();
      })
      .then(tokenID => {
         token = tokenID;
         const userCredentials = {
            email: newUser.email,
            name: newUser.name,
            createdAt: new Date().toISOString(),
            userID
         };
         return db.collection('adminUsers').doc(userID).set(userCredentials);

      })
      .then(() => {
         return res.status(201).json({ token });
      })
      .catch((err) => {
            console.error(err);
            return res.status(500).json({error : err.code});
         }
      );
});

app.post('/adminLogin', (req, res) => {
   const user = {
      email: req.body.email,
      password: req.body.password
   };
   let errors = {};
   if(isEmpty(user.email)){
      errors.email = 'Must not be empty';
   }
   if(isEmpty(user.password)){
      errors.password = 'Must not be empty';
   }

   if(Object.keys(errors).length > 0){
      return res.status(400).json(errors);
   }

   firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(data => {
         return data.user.getIdToken();
      })
      .then(token => {
         return res.json({ token });
      })
      .catch(err => {
         console.error(err);
         if(err.code === "auth/wrong-password"){
            return res.status(403).json({general: 'Wrong Credentials, please try again'});
         }else{
            return res.status(500).json({error: err.code});
         }
      })

});

app.post('/claims', (req, res) => {
   const userToken = req.body.token;
   admin.auth().verifyIdToken(userToken).then((claims) => {
         res.send(claims);
      });
});


exports.api = functions.https.onRequest(app);
