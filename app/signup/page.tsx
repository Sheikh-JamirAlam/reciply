"use client";

import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { initFirebase } from "../firebase/config";
import SignupLogin from "../components/SignupLogin";

export default function Home() {
  initFirebase();
  const auth = getAuth();
  const database = getDatabase();
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        console.log(currentUser);

        set(ref(database, "users/" + currentUser.uid), {
          firstName: firstName,
          lastName: lastName,
          email: currentUser.email,
        });
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

  return <SignupLogin page="signup" signup={signup} setFirstName={setFirstName} setLastName={setLastName} setEmail={setRegisterEmail} setPassword={setRegisterPassword} />;
}
