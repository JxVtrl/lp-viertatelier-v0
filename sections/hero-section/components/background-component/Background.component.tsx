import { useApp } from "@/context/AppContext";
import React from "react";
import { background_data } from "@/data/background-data";
import Image from "next/image";

const BGImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

const Background: React.FC = () => {
  const {
    device: { isDesktop },
    activeBackground,
  } = useApp();

  console.log("activeBg", background_data[activeBackground.collection][1].src);

  return (
    <div className="absolute inset-0 w-full h-[100vh] z-[-1] grid grid-cols-1 lg:grid-cols-2">
      <BGImage
        src={
          background_data[activeBackground.collection][activeBackground.index]
            .src
        }
        alt={
          background_data[activeBackground.collection][activeBackground.index]
            .alt
        }
      />
      {isDesktop && (
        <BGImage
          src={background_data[activeBackground.collection][1].src}
          alt={background_data[activeBackground.collection][1].alt}
        />
      )}
    </div>
  );
};

export default Background;
