// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoQTh0PHtJ4RqTeiafYAsak9w2N9i8I8A",
  authDomain: "ootd-6682f.firebaseapp.com",
  projectId: "ootd-6682f",
  storageBucket: "ootd-6682f.appspot.com",
  messagingSenderId: "897335404038",
  appId: "1:897335404038:web:c62ac135e6412da5c3c587",
  measurementId: "G-EKVQECKR5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth