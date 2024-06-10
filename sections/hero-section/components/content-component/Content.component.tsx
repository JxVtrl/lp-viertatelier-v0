import { CTA } from "@/components";
import React from "react";

const Content: React.FC = () => {
  return (
    <div className="
      flex
      flex-col
      gap-y-[20px]
      text-center
      text-[#fff]
      w-full
      h-full
      justify-center

    ">
      <div className="
        flex
        flex-col
        gap-y-[35px]
      ">
        <h1 className="
          text-[80px]
          tracking-[2px]
        ">Atelier Sob Medida</h1>

        <p className="
          text-[18px]
        ">
          Conheça nossa seleção de vestidos taylor made com design autoral e
          único
        </p>
      </div>

      <CTA />
    </div>
  );
};

export default Content;
