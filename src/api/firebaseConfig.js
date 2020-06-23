import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyDHkMwfWHbsbFAG6zuxyYrLyU5x76kbjoQ",
  authDomain: "mnit-portal.firebaseapp.com",
  databaseURL: "https://mnit-portal.firebaseio.com",
  projectId: "mnit-portal",
  storageBucket: "mnit-portal.appspot.com",
  messagingSenderId: "891020494722",
  appId: "1:891020494722:web:c0a3f68e68d7d91aed319b",
  measurementId: "G-0DVT5X0TWM",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
