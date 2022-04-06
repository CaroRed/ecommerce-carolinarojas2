// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTSF-JKnSNq791s6GP3U5KQEypIhHRH4I",
  authDomain: "curso-react-app-ccf93.firebaseapp.com",
  projectId: "curso-react-app-ccf93",
  storageBucket: "curso-react-app-ccf93.appspot.com",
  messagingSenderId: "721146073854",
  appId: "1:721146073854:web:a1e9fc5a4dcbd535c24baf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFireStoreApp=()=>{
    return app
}