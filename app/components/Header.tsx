import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div className="h-10 grid grid-cols-3 place-content-evenly">
        <section className="text-center">Reciply</section>
        <section className="flex gap-8">
          <span>Discover</span>
          <span>My Recipes</span>
          <span>Following</span>
          <span>ChatGPT</span>
        </section>
        <section className="flex gap-8 pl-12">
          <span>Search</span>
          <span>Profile</span>
        </section>
      </div>
    </header>
  );
}
