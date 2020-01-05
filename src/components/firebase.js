import firebase from 'firebase'
import { firestore } from 'firebase/app';
import 'firebase/auth'
import 'firebase/storage';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDUUWTS5_kSnD3r7axxxM8zH-2mvkH2Pzg",
  authDomain: "wanko-care-app.firebaseapp.com",
  databaseURL: "https://wanko-care-app.firebaseio.com",
  projectId: "wanko-care-app",
  storageBucket: "wanko-care-app.appspot.com",
  messagingSenderId: "659054982273",
  appId: "1:659054982273:web:3a9bb72850fa03b1ed4980",
  measurementId: "G-QXF1867SQG"
}

export const firebaseApp = firebase.initializeApp(config);

firestore()
    .enablePersistence({ synchronizeTabs: true })
    .catch(err => {
        console.error(err);
    });

export default firebase;
