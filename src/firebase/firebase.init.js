// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCKZLe8VmkClNyFGjaoHvyCMX_3dUjmX4",
  authDomain: "fir-authentication-df57e.firebaseapp.com",
  projectId: "fir-authentication-df57e",
  storageBucket: "fir-authentication-df57e.appspot.com",
  messagingSenderId: "503983130666",
  appId: "1:503983130666:web:ec98c6f549b609632a5b53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;