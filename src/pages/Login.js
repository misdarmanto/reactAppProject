import React from "react";
import { auth } from "../lib/config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContextApi } from "../lib/hooks/useContexApi";
import GoogleButton from "react-google-button";

const Login = () => {
  const { setIsAuth } = useContextApi();

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        setIsAuth(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px"
      }}
    >
      <h1>Sign In</h1>
      <GoogleButton onClick={signInWithGoogle} />
    </div>
  );
};

export default Login;
