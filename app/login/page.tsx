"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../firebase/AuthProvider";
import SignupLogin from "../components/SignupLogin";

export default function Home() {
  const { currentUser, login, findUser } = useAuth();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(loginEmail, loginPassword);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentUser) {
      findUser(currentUser);
    }
  }, [currentUser]); // eslint-disable-line react-hooks/exhaustive-deps

  return <SignupLogin page="login" login={handleLogin} setEmail={setLoginEmail} setPassword={setLoginPassword} />;
}
