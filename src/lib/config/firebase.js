import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmjfqAp21pNBa2nCBXuoB2uzNvd8ut-Iw",
  authDomain: "reactjsproject-3859f.firebaseapp.com",
  projectId: "reactjsproject-3859f",
  storageBucket: "reactjsproject-3859f.appspot.com",
  messagingSenderId: "433993487409",
  appId: "1:433993487409:web:08af712d28577a6d2a7110",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


