// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCEtgCwXj--9an-UlcdQmrn8dWFEzfanY",
  authDomain: "travel-guru-ec0e8.firebaseapp.com",
  projectId: "travel-guru-ec0e8",
  storageBucket: "travel-guru-ec0e8.appspot.com",
  messagingSenderId: "18219136943",
  appId: "1:18219136943:web:7e0c33a462e549d41fa15a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
export default auth;
