import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCddj-H9QBy3tXkwwvWTIQDhqIIDpsKvSo",
  authDomain: "koczanm-todo-list.firebaseapp.com",
  databaseURL: "https://koczanm-todo-list.firebase.com",
  projectId: "koczanm-todo-list",
  storageBucket: "koczanm-todo-list.appspot.com",
  messagingSenderId: "245798537524"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
