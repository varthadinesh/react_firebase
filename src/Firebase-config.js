// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: import.meta.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: import.meta.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: import.meta.env.REACT_APP_FIREBASE_APIKEY_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId: import.meta.env.REACT_APP_FIREBASE_APPID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq4Fz-qvIfTnNn57fhvkYQbxixtlzrtl4",
  authDomain: "reactwithfirebase-e4562.firebaseapp.com",
  projectId: "reactwithfirebase-e4562",
  storageBucket: "reactwithfirebase-e4562.appspot.com",
  messagingSenderId: "398320846713",
  appId: "1:398320846713:web:5c70626d5ae281629b51a8",
  measurementId: "G-9XE9QLY19N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);