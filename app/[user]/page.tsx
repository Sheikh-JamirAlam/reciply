"use client";

import { useEffect } from "react";
import { useAuth } from "../firebase/AuthProvider";
import Header from "../components/Header";

export default function Page({ params }: { params: { user: string } }) {
  const { loading, currentUser, findUser } = useAuth();
  useEffect(() => {
    if (currentUser) {
      findUser(currentUser);
    }
  }, [currentUser]); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return <div>Hello</div>;
  }
  if (currentUser) {
    return (
      <main className="bg-platinum h-screen">
        <Header />
      </main>
    );
  }
}
