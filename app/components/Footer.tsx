import React from "react";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="px-[2.5vh] xl:px-[5vw] py-12 grid grid-cols-3 sm:grid-flow-col sm:grid-cols-5 bg-platinum">
      <div className="mb-8 sm:mb-0 col-span-3 sm:col-span-2 grid content-between">
        <Image src="/logo.png" width={100} height={100} quality={100} alt="Reciply Logo" />
        <div className="text-gray-400 text-xs">
          <p>© 2023 Sheikh Jamir Alam. All rights reserved.</p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="mb-4 font-semibold text-sm">PRODUCTS</h2>
        <div className="text-gray-400 text-xs">
          <p>Product</p>
          <p>Log in</p>
          <p>Partnerships</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="mb-4 font-semibold text-sm">RESOURCES</h2>
        <div className="text-gray-400 text-xs">
          <p>About Reciply</p>
          <p>Contact me</p>
          <p>Blog</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="mb-4 font-semibold text-sm">GET IN TOUCH</h2>
        <div className="text-gray-400 text-xs">
          <p>About Reciply</p>
          <p>Contact me</p>
          <p>Blog</p>
        </div>
        <div className="flex gap-2 mt-4 text-lg">
          <a href="https://www.linkedin.com/in/sheikhjamiralam">
            <BsLinkedin />
          </a>
          <a href="https://twitter.com/jamirscode">
            <BsTwitter />
          </a>
          <a href="https://github.com/Sheikh-JamirAlam">
            <BsGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
