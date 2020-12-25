import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDHGcMqrD0Dcu3wlpKYTkVkNINTNYOUMXQ",
    authDomain: "clone-885ce.firebaseapp.com",
    projectId: "clone-885ce",
    storageBucket: "clone-885ce.appspot.com",
    messagingSenderId: "514662313239",
    appId: "1:514662313239:web:58aefe3076113e51f49b52",
    measurementId: "G-T9VFN1FZGW"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };