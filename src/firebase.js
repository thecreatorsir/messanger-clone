import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD__ilth4fadORrmm--VfQUYIorNKAjXEY",
  authDomain: "facebook-massanger-clone-714ed.firebaseapp.com",
  databaseURL: "https://facebook-massanger-clone-714ed.firebaseio.com",
  projectId: "facebook-massanger-clone-714ed",
  storageBucket: "facebook-massanger-clone-714ed.appspot.com",
  messagingSenderId: "906779500543",
  appId: "1:906779500543:web:63744570e3a0599f7111ca",
  measurementId: "G-LWTCVTML42",
});

const db = firebaseApp.firestore();

export default db;
