import React from "react";
import { footer_data } from "@/data/footer-data";
import { midia_data } from "@/data/midia-data";
import { useApp } from "@/context/AppContext";

import Image from "next/image";

// import Canela font from Google Fonts

const Footer: React.FC = () => {
  const {
    device: { isMobile },
  } = useApp();

  return (
    <footer className="flex flex-col items-center justify-center text-black pt-[195px] bg-[#EFEFE9]">
      <div className={`flex flex-col gap-3 items-center`}>
        <div className="text-[21px]">{footer_data.followText}</div>
        <div className="text-[44px]">{footer_data.instaUsername}</div>
      </div>
      <div className={`w-full flex justify-center mt-[60px]`}>
        {footer_data.images.map((image, index) => (
          <div
            key={index}
            className={`
            w-[200px]
            h-[200px]
            relative
            m-2
            
              `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              className={`w-full h-full
                absolute object-cover bg-center mx-2 `}
            />
          </div>
        ))}
      </div>
      <div>
        <ul
          className="
      flex
      gap-[20px]
      text-[#000]
      text-[24px]
      font-bold
      items-center
      my-4
    "
        >
          {midia_data.map((midia) => (
            <li className="cursor-pointer" key={midia.id}>
              {midia.icon}
            </li>
          ))}
        </ul>
      </div>
      <div className="pb-8">{footer_data.scheduleVisitText}</div>
    </footer>
  );
};

export default Footer;
