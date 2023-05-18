"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Rubik } from "next/font/google";
import { motion, useCycle, Variants } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { MenuToggler } from "./MenuToggler";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500"],
});

const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at 35px 31px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const navigationVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [windowWidth, setWindowWidth] = useState(() => {
    return typeof window !== "undefined" ? window.innerWidth : 0;
  });
  const [showMenuToggleButton, setShowMenuToggleButton] = useState(() => {
    return windowWidth >= 768 ? false : true;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(() => window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setShowMenuToggleButton(false);
    } else {
      setShowMenuToggleButton(true);
    }
  }, [windowWidth]);

  return (
    <header className={rubik.className}>
      <div className="pl-20 md:pl-0 h-16 bg-light grid grid-cols-3 md:grid-cols-4 xl:grid-cols-3 place-content-evenly">
        {showMenuToggleButton && (
          <motion.nav id="menu" className="absolute z-[2] top-0 left-0 bottom-0 h-[120%] w-[300px]" initial={false} animate={isOpen ? "open" : "closed"}>
            <motion.div className="bg-light absolute z-[2] top-0 left-0 bottom-0 w-[300px] shadow-3xl" variants={sidebar} />
            <motion.ul className="p-5 absolute z-[2] top-[100px] w-[260px]" variants={navigationVariants}>
              <motion.li className="flex items-center mb-5 space-x-6 cursor-pointer" variants={menuItemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <span className="ml-[4.5rem] pt-3 flex-1 h-8 rounded-lg">DISCOVER</span>
              </motion.li>
              <motion.li className="flex items-center mb-5 space-x-6 cursor-pointer" variants={menuItemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <span className="ml-[4.5rem] pt-3 flex-1 h-8 rounded-lg">MY RECIPES</span>
              </motion.li>
              <motion.li className="flex items-center mb-5 space-x-6 cursor-pointer" variants={menuItemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <span className="ml-[4.5rem] pt-3 flex-1 h-8 rounded-lg">FOLLOWING</span>
              </motion.li>
              <motion.li className="flex items-center mb-5 space-x-6 cursor-pointer" variants={menuItemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <span className="ml-[4.5rem] pt-3 flex-1 h-8 rounded-lg">CHAT-GPT</span>
              </motion.li>
            </motion.ul>
            <MenuToggler
              toggle={() => {
                toggleOpen();
                document.getElementById("menu")?.classList.toggle("absolute");
                document.getElementById("menu")?.classList.toggle("fixed");
              }}
            />
          </motion.nav>
        )}
        <section className="col-span-2 md:col-span-1">
          <Image className="mx-auto" src="/logo.png" width={100} height={100} quality={100} alt="Reciply Logo" />
        </section>
        {!showMenuToggleButton && (
          <section className="col-span-2 xl:col-span-1 flex justify-between items-center">
            <span>DISCOVER</span>
            <span>MY RECIPES</span>
            <span>FOLLOWING</span>
            <span>CHAT-GPT</span>
          </section>
        )}
        <section className="xl:mr-40 flex gap-8 place-content-center items-center">
          <IoSearch className="text-lg" />
          <FaRegUserCircle className="text-lg" />
        </section>
      </div>
    </header>
  );
};

export default Header;
