// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPKBTlohuOXARS56ARA3xLSrJwbyfJUn0",
  authDomain: "tripwiz-r.firebaseapp.com",
  databaseURL: "https://tripwiz-r-default-rtdb.firebaseio.com",
  projectId: "tripwiz-r",
  storageBucket: "tripwiz-r.appspot.com",
  messagingSenderId: "358069767776",
  appId: "1:358069767776:web:e399bacd43bbd420ca7d05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
