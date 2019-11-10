const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const firebase = require('firebase');
const cors = require('cors');
const config = require('./config');
const serviceAccount = require('./elections_service_account.json');

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
});
const app = express();
app.use(cors());
const db = admin.firestore();
firebase.initializeApp(config);


app.get('/getSecretary', (req, res) => {
   admin.firestore().collection('Secretary').get().then((data) => {
      let users = [];
      data.forEach((doc) => {
         users.push(doc.data());
      });
      return res.json(users);
   })
   .catch((err) => console.error(err));
})
app.get('/getSenators', (req, res) => {
   admin.firestore().collection('Senators').get().then((data) => {
      let users = [];
      data.forEach((doc) => {
         users.push(doc.data());
      });
      return res.json(users);
   })
   .catch((err) => console.error(err));
})

app.get("/getAllPositions", (req, res) => {
   admin.firestore().collection('AllPositions').get().then((data) => {
      let users = [];
      data.forEach((doc) => {
         users.push(doc.data());
      });
      return res.json(users);
   })
   .catch((err) => console.error(err));
})



exports.api = functions.https.onRequest(app);
