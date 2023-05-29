"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../firebase/AuthProvider";
import SignupLogin from "../components/SignupLogin";

export default function Home() {
  const { currentUser, signup, findUser } = useAuth();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignup = async () => {
    try {
      await signup(registerEmail, registerPassword, firstName, lastName, userName);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentUser) {
      findUser(currentUser, "signup");
    }
  }, [currentUser]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SignupLogin page="signup" signup={handleSignup} setUserName={setUserName} setFirstName={setFirstName} setLastName={setLastName} setEmail={setRegisterEmail} setPassword={setRegisterPassword} />
  );
}
