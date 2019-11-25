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

exports.api = functions.https.onRequest(app);