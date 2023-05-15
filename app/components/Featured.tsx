"use client";

import React, { useEffect, useState } from "react";
import { Rubik } from "next/font/google";
import { motion } from "framer-motion";
import { TbArrowUpBar } from "react-icons/tb";
import { BiCheckboxSquare } from "react-icons/bi";
import { recipes, Recipe } from "../utils/recipes";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["600"],
});

const Featured = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [featured, setFeatured] = useState(Array<Recipe>);
  const [animate, setAnimate] = useState("");
  const [windowWidth, setWindowWidth] = useState(() => {
    return typeof window !== "undefined" ? window.innerWidth : 0;
  });
  const [sliceValue, setSliceValue] = useState(() => {
    return window.innerWidth >= 768 ? 8 : 6;
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(() => window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setSliceValue(8);
    } else {
      setSliceValue(6);
    }
  }, [windowWidth]);

  useEffect(() => {
    const filteredRecipes = recipes.sort((prevRecipe: Recipe, nextRecipe: Recipe) => nextRecipe.likes - prevRecipe.likes).slice(0, sliceValue);
    setFeatured([...filteredRecipes]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (select: string) => {
    setSelectedFilter(select);
    setAnimate("animate-show");
    setTimeout(() => setAnimate(""), 500);
    if (select === "all") {
      const filteredRecipes = recipes.sort((prevRecipe: Recipe, nextRecipe: Recipe) => nextRecipe.likes - prevRecipe.likes).slice(0, sliceValue);
      setTimeout(() => setFeatured([...filteredRecipes]), 250);
    } else {
      const filteredRecipes = recipes.filter((recipe: Recipe) => recipe.category === select).sort((prevRecipe: Recipe, nextRecipe: Recipe) => nextRecipe.likes - prevRecipe.likes);
      setTimeout(() => setFeatured([...filteredRecipes]), 250);
    }
  };

  return (
    <>
      <section className="h-20 flex justify-center gap-[25vw]">
        <div className="grid grid-flow-col gap-1 content-center">
          <TbArrowUpBar className="my-auto text-lg text-pumpkin" />
          <p className={`${rubik.className} cursor-default`}>FEATURED PRODUCTS</p>
        </div>
        <div className="grid grid-flow-col gap-10 content-center">
          <motion.div className={`cursor-pointer ${selectedFilter === "all" && "font-semibold"}`} onClick={() => handleClick("all")} whileHover={{ color: "#F1721A" }}>
            ALL
            {selectedFilter === "all" && <motion.div layoutId="underline" style={{ height: "2px", backgroundColor: "#F1721A" }} />}
          </motion.div>
          <motion.div className={`cursor-pointer ${selectedFilter === "veg" && "font-semibold"}`} onClick={() => handleClick("veg")} whileHover={{ color: "#F1721A" }}>
            VEG
            {selectedFilter === "veg" && <motion.div layoutId="underline" style={{ height: "2px", backgroundColor: "#F1721A" }} />}
          </motion.div>
          <motion.div className={`cursor-pointer ${selectedFilter === "non-veg" && "font-semibold"}`} onClick={() => handleClick("non-veg")} whileHover={{ color: "#F1721A" }}>
            NON-VEG
            {selectedFilter === "non-veg" && <motion.div layoutId="underline" style={{ height: "2px", backgroundColor: "#F1721A" }} />}
          </motion.div>
        </div>
      </section>
      <section className="py-12 px-[5vw] md:px-[2.5vw] lg:px-[5vw] xl:px-[10vw] 2xl:px-[15vw] bg-light grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {featured.slice(0, sliceValue).map((recipe: Recipe, index: number) => {
          return (
            <div key={index} className={`h-[20vh] w-[20vh] mb-8 bg-platinum transition-all ${animate}`}>
              <BiCheckboxSquare className={`${recipe.category === "veg" ? "fill-green-500" : "fill-red-500"} ml-auto m-1 text-2xl`} />
              <p className="ml-1 mt-2 text-xs top-[calc(20vh-1.75rem)] relative">{recipe.name}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Featured;
