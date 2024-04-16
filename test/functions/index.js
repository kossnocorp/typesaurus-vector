const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const functions = require("firebase-functions/v1");

initializeApp();

exports.prepareVector = functions.pubsub
  .schedule("0 * * * *")
  .onRun(async () => {
    const db = getFirestore();
    const coll = db.collection("vector");
    // TODO:
  });
