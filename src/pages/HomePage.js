import React from "react";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Testemionials from "../components/Testemionials";
import About from "../components/About";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Specials />
      <Testemionials />
      <About />
    </main>
  );
}
