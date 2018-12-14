import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const fbConfig = {
  apiKey: "AIzaSyCddj-H9QBy3tXkwwvWTIQDhqIIDpsKvSo",
  authDomain: "koczanm-todo-list.firebaseapp.com",
  databaseURL: "https://koczanm-todo-list.firebaseio.com",
  projectId: "koczanm-todo-list",
  storageBucket: "koczanm-todo-list.appspot.com",
  messagingSenderId: "245798537524"
};

firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
