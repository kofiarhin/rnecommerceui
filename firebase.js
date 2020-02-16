import * as firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDnFPJEin1XrVCQoag-CAxZWpTD79kRMxs",
    authDomain: "rnecomerce.firebaseapp.com",
    databaseURL: "https://rnecomerce.firebaseio.com",
    projectId: "rnecomerce",
    storageBucket: "rnecomerce.appspot.com",
    messagingSenderId: "808243589591",
    appId: "1:808243589591:web:8d1058ebacc1e7d71c9b92"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;