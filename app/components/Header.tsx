import React from "react";
import Image from "next/image";
import { Rubik } from "next/font/google";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500"],
});

const Header = () => {
  return (
    <header className={rubik.className}>
      <div className="h-16 bg-light grid grid-cols-3 place-content-evenly">
        <section>
          <Image className="mx-auto" src="/logo.png" width={100} height={100} quality={100} alt="Reciply Logo" />
        </section>
        <section className="flex gap-8 place-content-evenly items-center">
          <span>DISCOVER</span>
          <span>MY RECIPES</span>
          <span>FOLLOWING</span>
          <span>CHAT-GPT</span>
        </section>
        <section className="mr-40 flex gap-8 place-content-center items-center">
          <IoSearch className="text-lg" />
          <FaRegUserCircle className="text-lg" />
        </section>
      </div>
    </header>
  );
};

export default Header;
