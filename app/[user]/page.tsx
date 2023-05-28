"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../firebase/AuthProvider";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import RecipeList from "../components/RecipeList";

export default function Page({ params }: { params: { user: string } }) {
  const { loading, currentUser, findUser, userDetails } = useAuth();

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
      <main className="bg-light h-screen">
        <Header />
        <UserProfile firstName={userDetails?.firstName} lastName={userDetails?.lastName} email={userDetails?.email} followers={userDetails?.followers} recipes={userDetails?.recipes} />
        <RecipeList recipes={userDetails?.recipes} />
      </main>
    );
  }
}