"use client";

import { useState } from "react";
import { useAuth } from "../firebase/AuthProvider";
import Header from "../components/Header";

export default function Page({ params }: { params: { user: string } }) {
  const { loading, currentUser, addRecipes } = useAuth();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredientList, setIngredientList] = useState("");
  const [steps, setSteps] = useState("");
  const [category, setCategory] = useState("");

  if (loading) {
    return <div>Hello</div>;
  }
  if (currentUser) {
    return (
      <main className="bg-light h-screen">
        <Header />
        <input
          type="text"
          placeholder="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <textarea
          cols={30}
          rows={10}
          placeholder="ingredientList"
          value={ingredientList}
          onChange={(e) => {
            setIngredientList(e.target.value);
          }}
        />
        <textarea
          cols={30}
          rows={10}
          placeholder="steps"
          value={steps}
          onChange={(e) => {
            setSteps(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const ar1 = [ingredientList];
            const ar2 = [steps];
            addRecipes(author, title, ar1, description, ar2, category);
          }}
        >
          Click me
        </button>
      </main>
    );
  }
}
