
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBipdGcrfvPjXyn1fRRY-P8Drd07mI-8fI",
  authDomain: "auth-gmth.firebaseapp.com",
  databaseURL: "https://auth-gmth-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-gmth",
  storageBucket: "auth-gmth.appspot.com",
  messagingSenderId: "786343737422",
  appId: "1:786343737422:web:d76856ea618a7af0db2b1f",
  measurementId: "G-WH4JVQGE54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);