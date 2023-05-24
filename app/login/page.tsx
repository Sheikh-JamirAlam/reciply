"use client";

import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { initFirebase } from "../firebase/config";
import SignupLogin from "../components/SignupLogin";

export default function Home() {
  initFirebase();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    router.push(`/${user.email}`);
  }

  return <SignupLogin page="login" login={login} setEmail={setLoginEmail} setPassword={setLoginPassword} />;
}
