const functions = require('firebase-functions');
const express = require('express');

const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

app.get('/', (req, res) => {
    res.send("Hello world");
});

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.api = functions.https.onRequest(app);
