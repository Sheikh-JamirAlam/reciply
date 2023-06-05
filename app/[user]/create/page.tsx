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
  const [showWarningTextBox, setShowWarningTextBox] = useState({ target: "", state: false });
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
              <p className={`text-lg font-semibold ${showWarningTextBox.state && showWarningTextBox.target === "ingredientList" && "underline decoration-2 decoration-solid decoration-red-600"}`}>
                Ingredient List:
              </p>
              <TextareaAutosize
                id="ingredients"
                aria-label="empty textarea"
                placeholder={`EXAMPLE:-\n1. Noodles\n2. Salt`}
                className="w-full bg-platinum outline-none resize-none"
                minRows={6}
                value={ingredientList}
                onKeyDown={(e) => {
                  if (ingredientList === "") {
                    if (/^[a-zA-Z0-9]$/.test(e.key)) {
                      setIngredientList("1. ");
                    }
                  }
                  if (e.key === "Enter") {
                    e.preventDefault();
                    setIngredientList((prevValue) => prevValue + "\n" + (prevValue.split("\n").length + 1) + ". ");
                  }
                }}
                onChange={(e) => {
                  setShowWarningTextBox({ target: "", state: false });
                  setIngredientList(e.target.value);
                }}
              />
            </div>
            <div>
              <p className={`text-lg font-semibold ${showWarningTextBox.state && showWarningTextBox.target === "steps" && "underline decoration-2 decoration-solid decoration-red-600"}`}>
                Steps to make:
              </p>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder={`EXAMPLE:-\n1. Prepare the broth\n2. Cook the noodles`}
                className="w-full bg-platinum outline-none resize-none"
                minRows={6}
                value={steps}
                onKeyDown={(e) => {
                  if (steps === "") {
                    if (/^[a-zA-Z0-9]$/.test(e.key)) {
                      setSteps("1. ");
                    }
                  }
                  if (e.key === "Enter") {
                    e.preventDefault();
                    setSteps((prevValue) => prevValue + "\n" + (prevValue.split("\n").length + 1) + ". ");
                  }
                }}
                onChange={(e) => {
                  setShowWarningTextBox({ target: "", state: false });
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
                  const regex = /^\d+\.\s(.*)$/gm;
                  const testRegex = /^(\d+\.\s.*\n)*\d+\.\s.*$/;
                  if (testRegex.test(ingredientList)) {
                    if (testRegex.test(steps)) {
                      const ingredientFound = ingredientList.match(regex);
                      const extractedIngredientList = ingredientFound?.map((eachLine) => eachLine.replace(/^\d+\.\s/, ""));
                      const stepsFound = steps.match(regex);
                      const extractedSteps = stepsFound?.map((eachLine) => eachLine.replace(/^\d+\.\s/, ""));
                      const category = categoryButton ? "non-veg" : "veg";
                      await addRecipes(params.user, title, extractedIngredientList, description, extractedSteps, category);
                      router.push(`/${params.user}`);
                    } else {
                      setShowWarningTextBox({ target: "steps", state: true });
                    }
                  } else {
                    setShowWarningTextBox({ target: "ingredientList", state: true });
                  }
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
