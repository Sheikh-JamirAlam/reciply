"use client";

import { useState } from "react";
import Image from "next/image";
import { TbArrowUpBar } from "react-icons/tb";
import { BiSortDown } from "react-icons/bi";
import { BsArrowRightCircle } from "react-icons/bs";
import { FormControl, MenuItem, createTheme, ThemeProvider } from "@mui/material";
import { motion } from "framer-motion";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Recipe = {
  title: string;
  ingredientList: Array<string>;
  description: string;
  url: string;
  steps: Array<string>;
  favs: number;
  type: "veg" | "non-veg";
};

type Props = {
  recipes: Array<Recipe> | boolean;
};

const RecipeList = (props: Props) => {
  const [age, setAge] = useState("1");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const theme = createTheme({
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            "&.MuiInputBase-root": {
              "&:after": {
                borderBottom: "2px solid #FA9146",
              },
            },
            "& .MuiSelect-select": {
              paddingLeft: "5px",
            },
          },
        },
      },
    },
  });

  return (
    <section className="bg-light">
      <div className="max-[440px]:mx-2 mx-10 md:mx-20 lg:mx-40 xl:mx-60 py-8 flex justify-between">
        <div className="grid grid-flow-col gap-1 content-center">
          <TbArrowUpBar className="my-auto text-lg text-pumpkin" />
          <p className="font-bold text-lg cursor-default">RECIPES</p>
        </div>
        <div className="grid grid-flow-col gap-3 max-[440px]:gap-1 content-center">
          <BiSortDown className="my-auto text-xl text-pumpkin" />
          <p className="my-auto font-bold text-lg cursor-default hidden sm:block">SORT BY</p>
          <ThemeProvider theme={theme}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 155 }}>
              <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
                <MenuItem value={1}>Most Popular</MenuItem>
                <MenuItem value={2}>Recently Created</MenuItem>
              </Select>
            </FormControl>
          </ThemeProvider>
        </div>
      </div>
      <div className="h-[2px] mx-16 sm:mx-32 bg-gray-300"></div>
      {typeof props.recipes !== "boolean" &&
        props.recipes?.map((recipe, index) => (
          <div key={index}>
            <div className="max-[400px]:mx-2 mx-8 md:mx-20 lg:mx-40 xl:mx-60 py-8 flex justify-between">
              <div className="h-[150px] w-[150px] max-[570px]:h-24 max-[570px]:w-24">
                <Image src={recipe.url} width={150} height={150} alt="User Profile Picture" className="h-[150px] w-[150px] max-[570px]:h-24 max-[570px]:w-24 object-cover" />
              </div>
              <div className="w-[60%] md:w-[70%] my-auto">
                <h3 className="max-[570px]:text-lg text-xl font-semibold">{recipe.title}</h3>
                <p className="mt-2">{recipe.description.length > 250 ? recipe.description.slice(0, 250) + "..." : recipe.description}</p>
              </div>
              <div className="my-auto">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <BsArrowRightCircle className="max-[570px]:text-2xl text-3xl cursor-pointer" />
                </motion.div>
              </div>
            </div>
            {recipe !== (Array.isArray(props.recipes) && props.recipes[props.recipes.length - 1]) && <div className="h-[2px] mx-32 sm:mx-56 md:mx-72 xl:mx-96 bg-gray-300"></div>}
          </div>
        ))}
    </section>
  );
};

export default RecipeList;
