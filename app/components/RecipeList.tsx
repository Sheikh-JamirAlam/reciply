"use client";

import { useState } from "react";
import Image from "next/image";
import { TbArrowUpBar } from "react-icons/tb";
import { BiSortDown } from "react-icons/bi";
import { BsArrowRightCircle } from "react-icons/bs";
import { FormControl, MenuItem, createTheme, ThemeProvider } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Recipe = {
  title: string;
  ingredientList: Array<string>;
  description: string;
  steps: Array<string>;
  favs: number;
  type: "veg" | "non-veg";
};

type Props = {
  recipes: Array<Recipe>;
};

const RecipeList = (props: Props) => {
  console.log(props.recipes);
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
      <div className="mx-60 py-8 flex justify-between">
        <div className="max-[430px]:w-40 ml-6 sm:ml-0 grid grid-flow-col gap-1 content-center">
          <TbArrowUpBar className="my-auto text-lg text-pumpkin" />
          <p className="font-bold text-lg cursor-default">RECIPES</p>
        </div>
        <div className="max-[430px]:w-40 ml-6 sm:ml-0 grid grid-flow-col gap-3 content-center">
          <BiSortDown className="my-auto text-xl text-pumpkin" />
          <p className="my-auto font-bold text-lg cursor-default">SORT BY</p>
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
      <div className="h-[2px] mx-32 bg-gray-300"></div>
      {props.recipes.map((recipe) => (
        <>
          <div className="mx-60 py-8 flex justify-between">
            <Image src="/user/profile.png" width={150} height={150} alt="User Profile Picture" />
            <div className="w-[70%] my-auto">
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
              <p className="mt-2">{recipe.description}</p>
            </div>
            <div className="my-auto">
              <BsArrowRightCircle className="text-3xl" />
            </div>
          </div>
          {recipe !== props.recipes[props.recipes.length - 1] && <div className="h-[2px] mx-96 bg-gray-300"></div>}
        </>
      ))}
    </section>
  );
};

export default RecipeList;
