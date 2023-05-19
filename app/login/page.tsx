"use client";

import React, { useState } from "react";
import { FormControl, Button, TextField, InputLabel, OutlinedInput, InputAdornment, IconButton, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#F1721A",
              },
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
              "&.Mui-focused fieldset": {
                borderColor: "#F1721A",
              },
            },
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#F1721A",
              },
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
              "&.Mui-focused fieldset": {
                borderColor: "#F1721A",
              },
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "&.MuiButton-contained": {
              height: "3rem",
              borderRadius: "30px",
              backgroundColor: "#F1721A",
              "&:hover": {
                backgroundColor: "#FA9146",
              },
            },
          },
        },
      },
    },
  });

  return (
    <main className="h-screen bg-login-page bg-no-repeat bg-center bg-cover">
      <div className="w-[80%] min-[1171px]:w-[60%] rounded-[40px] absolute top-[10%] left-[10%] max-[1024px]:top-[50%] max-[1024px]:left-[50%] max-[1024px]:translate-x-[-50%] max-[1024px]:translate-y-[-50%] bg-light shadow-4xl">
        <section className="pt-[3vh] px-6 2xs:px-12">
          <Image src="/logo.png" width={100} height={100} quality={100} alt="Reciply Logo" />
        </section>
        <section className="px-6 2xs:px-12 xs:px-24 md:px-36 py-[5vh]">
          <p className="text-gray-400 font-semibold">WELCOME BACK</p>
          <h1 className="py-4 text-2xl font-black">
            Log into Reciply<span className="text-pumpkin">.</span>
          </h1>
          <p className="text-gray-400">
            Do not have an account?{" "}
            <Link href="/signup" className="text-pumpkin">
              Sign up
            </Link>
          </p>
        </section>
        <section className="px-6 2xs:px-12 xs:px-24 md:px-36 pb-12 grid grid-cols-2 gap-4">
          <ThemeProvider theme={theme}>
            <TextField id="outlined-basic" label="First Name" variant="outlined" />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
            <TextField id="outlined-basic" label="Username" variant="outlined" className="col-span-2" />
            <FormControl className="col-span-2" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button variant="contained" className="w-[auto] min-[878px]:w-[40%] mt-8 mx-auto col-span-2">
              Log in
            </Button>
          </ThemeProvider>
        </section>
      </div>
    </main>
  );
}
