import React from "react";
import { Header } from "@/components";
import { HeroBackground, HeroContent } from "./components";

const Hero: React.FC = () => {
  return (
    <section className="
      relative
      flex
      flex-col
      justify-center
      w-full
      h-screen
    ">
      <Header />
      <HeroBackground />
      <HeroContent />
    </section>
  );
};

export default Hero;
