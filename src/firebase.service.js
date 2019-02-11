import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCW8v55QC9FqIgrVsACCoS2sdw_GSFXYw0",
  authDomain: "fir-task-c37ed.firebaseapp.com",
  databaseURL: "https://fir-task-c37ed.firebaseio.com",
  projectId: "fir-task-c37ed",
  storageBucket: "fir-task-c37ed.appspot.com",
  messagingSenderId: "1030570304835"
};
const fire = firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const fb = {
  login: () => fire.auth().signInWithPopup(provider)
};
