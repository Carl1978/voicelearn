import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDP3WDXaZoPvIEdixcwIWba9ks6U-JyOXE",
  authDomain: "memirsoftware-marrioplan.firebaseapp.com",
  databaseURL: "https://memirsoftware-marrioplan.firebaseio.com",
  projectId: "memirsoftware-marrioplan",
  storageBucket: "memirsoftware-marrioplan.appspot.com",
  messagingSenderId: "248325153649"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
