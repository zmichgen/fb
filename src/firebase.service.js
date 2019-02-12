import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC7Q4AuWaK1MUAl8msyPzcn5dJcmlbE1XU',
  authDomain: 'template-31fbe.firebaseapp.com',
  databaseURL: 'https://template-31fbe.firebaseio.com',
  projectId: 'template-31fbe',
  storageBucket: '',
  messagingSenderId: '784408908854',
};
const fire = firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const fb = {
  login: () => fire.auth().signInWithPopup(provider),
};
