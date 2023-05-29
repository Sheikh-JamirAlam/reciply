"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useAuth } from "../../firebase/AuthProvider";
import Header from "../../components/Header";
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CategoryButton from "../../components/CategoryButton";

export default function Page({ params }: { params: { user: string } }) {
  const { loading, currentUser, addRecipes } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredientList, setIngredientList] = useState("");
  const [steps, setSteps] = useState("");
  const [categoryButton, setCategoryButton] = useState(false);
  const router = useRouter();

  if (loading) {
    return <div>Hello</div>;
  }
  if (currentUser) {
    return (
      <main className="bg-platinum h-auto sm:h-screen">
        <Header />
        <section className="flex flex-col sm:flex-row">
          <section className="sm:w-[60%] lg:w-[70%] p-12 pt-16 bg-platinum grid gap-6">
            <input
              type="text"
              className="w-1/3 lg:w-1/4 text-3xl font-semibold bg-platinum outline-none"
              placeholder="TITLE"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="DESCRIBE YOUR RECIPE"
              className="bg-platinum outline-none resize-none"
              minRows={3}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <div>
              <p className="text-lg font-semibold">Ingredient List:</p>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder={`EXAMPLE:-\n1. Noodles\n2. Salt`}
                className="w-full bg-platinum outline-none resize-none"
                minRows={6}
                value={ingredientList}
                onChange={(e) => {
                  setIngredientList(e.target.value);
                }}
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Steps to make:</p>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder={`EXAMPLE:-\n1. Prepare the broth\n2. Cook the noodles`}
                className="w-full bg-platinum outline-none resize-none"
                minRows={6}
                value={steps}
                onChange={(e) => {
                  setSteps(e.target.value);
                }}
              />
            </div>
          </section>
          <section className="sm:w-[40%] lg:w-[30%] p-8 pt-16">
            <CategoryButton categoryButton={categoryButton} setCategoryButton={setCategoryButton} />
            <div className="h-48 w-48 mx-auto mt-20 bg-gray-300"></div>
            <Box sx={{ "& > :not(style)": { m: 1 }, marginTop: "4rem", display: "flex", justifyContent: "center" }}>
              <Fab
                sx={{ backgroundColor: "#FA9146", "&:hover": { backgroundColor: "#F1721A" } }}
                color="primary"
                variant="extended"
                aria-label="add"
                onClick={async () => {
                  const ar1 = [ingredientList];
                  const ar2 = [steps];
                  const category = categoryButton ? "non-veg" : "veg";
                  await addRecipes(params.user, title, ar1, description, ar2, category);
                  router.push(`/${params.user}`);
                }}
              >
                <AddIcon />
                CREATE
              </Fab>
            </Box>
          </section>
        </section>
      </main>
    );
  }
}
