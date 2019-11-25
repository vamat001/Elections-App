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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const db = admin.firestore();
firebase.initializeApp(config);

function incrementVote(collectionPath, docName) {
   let ref = db.collection('undergradVotes').doc(PresUID);
   db.runTransaction(function(transaction){
      return transaction.get(ref).then(function(refDoc){
         if (!refDoc.exists){
            console.log("Doc doesn't exist");
         }
         var newVoteCount = refDoc.data().voteCount + 1;
         transaction.update(ref, { voteCount: newVoteCount });
      });
   })
   .then(function() {
      console.log("Transaction successfully committed!");
   }).catch(function(error) {
      console.log("Transaction failed: ", error);
   });
}

app.get("/Candidates", (req, res) => {
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
