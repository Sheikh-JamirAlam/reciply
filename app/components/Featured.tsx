"use client";

import React, { useEffect, useState } from "react";
import { Rubik } from "next/font/google";
import { TiArrowUnsorted } from "react-icons/ti";
import { motion } from "framer-motion";
import { recipes, Recipe } from "../utils/recipes";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500"],
});

type Props = {};

const Featured = (props: Props) => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sliceValue, setSliceValue] = useState(8);

  window.onresize = () => {
    setWindowWidth(() => window.innerWidth);
  };

  useEffect(() => {
    if (windowWidth >= 768) {
      setSliceValue(8);
    } else {
      setSliceValue(6);
    }
  }, [windowWidth]);

  return (
    <>
      <section className="h-20 flex justify-center gap-[25vw]">
        <div className="grid grid-flow-col gap-2 content-center">
          <TiArrowUnsorted className="my-auto fill-pumpkin" />
          <p className={rubik.className}>FEATURED PRODUCTS</p>
        </div>
        <div className="grid grid-flow-col gap-10 content-center">
          <motion.div className={`cursor-pointer ${selectedFilter === 0 && "font-semibold"}`} onClick={() => setSelectedFilter(0)} whileHover={{ color: "#F1721A" }}>
            ALL
            {selectedFilter === 0 && <motion.div layoutId="underline" style={{ height: "2px", backgroundColor: "#F1721A" }} />}
          </motion.div>
          <motion.div className={`cursor-pointer ${selectedFilter === 1 && "font-semibold"}`} onClick={() => setSelectedFilter(1)} whileHover={{ color: "#F1721A" }}>
            VEG
            {selectedFilter === 1 && <motion.div layoutId="underline" style={{ height: "2px", backgroundColor: "#F1721A" }} />}
          </motion.div>
          <motion.div className={`cursor-pointer ${selectedFilter === 2 && "font-semibold"}`} onClick={() => setSelectedFilter(2)} whileHover={{ color: "#F1721A" }}>
            NON-VEG
            {selectedFilter === 2 && <motion.div layoutId="underline" style={{ height: "2px", backgroundColor: "#F1721A" }} />}
          </motion.div>
        </div>
      </section>
      <section className="py-12 px-[5vw] md:px-[2.5vw] lg:px-[5vw] xl:px-[10vw] 2xl:px-[15vw] bg-light grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {recipes
          .filter((recipe: Recipe) => {
            if (selectedFilter === 1) {
              return recipe.category === "veg";
            } else if (selectedFilter === 2) {
              return recipe.category === "non-veg";
            }
            return recipe;
          })
          .sort((prevRecipe: Recipe, nextRecipe: Recipe) => nextRecipe.likes - prevRecipe.likes)
          .slice(0, sliceValue)
          .map((recipe: Recipe, index: number) => {
            return (
              <>
                <div key={index} className="h-[20vh] w-[20vh] mb-8 bg-platinum">
                  <p className="ml-1 mt-2 text-xs top-[20vh] relative">{recipe.name}</p>
                </div>
              </>
            );
          })}
      </section>
    </>
  );
};

export default Featured;
