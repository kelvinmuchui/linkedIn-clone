import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBPD0wpVwLUlpu_DLbBi0TxzFIhYln6pSY",
  authDomain: "linkedin-clone-b3928.firebaseapp.com",
  projectId: "linkedin-clone-b3928",
  storageBucket: "linkedin-clone-b3928.appspot.com",
  messagingSenderId: "311967466031",
  appId: "1:311967466031:web:ccee21e4851f5ee7df7cda",
  measurementId: "G-FQKCCFTJPJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};