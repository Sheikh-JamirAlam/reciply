"use client";

import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, User } from "firebase/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";
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
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        console.log(currentUser);

        set(ref(database, "users/" + currentUser.uid), {
          firstName,
          lastName,
          userName,
          email: currentUser.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const findUser = async (user: User) => {
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `users/${user.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          router.push(`/${snapshot.val().userName}`);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    findUser(user);
  }

  return <SignupLogin page="signup" signup={signup} setUserName={setUserName} setFirstName={setFirstName} setLastName={setLastName} setEmail={setRegisterEmail} setPassword={setRegisterPassword} />;
}
