"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../firebase/AuthProvider";
import Header from "../components/Header";

export default function Page({ params }: { params: { user: string } }) {
  const { loading, currentUser, findUser, userDetails, getRecipes, recipeList } = useAuth();
  const [recipe, setRecipe] = useState<any>();

  useEffect(() => {
    if (currentUser) {
      findUser(currentUser, "onlyGetUser");
      getRecipes(currentUser);
    }
  }, [currentUser]); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return <div>Hello</div>;
  }
  if (currentUser) {
    if (recipeList) {
      // recipeList.map;
    }
    return (
      <main className="bg-light h-screen">
        <Header />
      </main>
    );
  }
}
