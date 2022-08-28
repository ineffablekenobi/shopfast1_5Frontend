import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqUdrYxawT2g8W7_LNSV4yvIBGM6Prawk",
  authDomain: "uplodingfile-fe54b.firebaseapp.com",
  projectId: "uplodingfile-fe54b",
  storageBucket: "uplodingfile-fe54b.appspot.com",
  messagingSenderId: "159011678188",
  appId: "1:159011678188:web:ad4cb2abdfe2abb90702c9"
};
// Initialize Firebase

const CreateProductPage = initializeApp(firebaseConfig);
export const storage = getStorage(CreateProductPage);