import React from "react";
import { footer_data } from "@/data/footer-data";
import { midia_data } from "@/data/midia-data";
import { useApp } from "@/context/AppContext";
import localFont from "next/font/local";
import Image from "next/image";
import { Inter } from "next/font/google";

const canelaFont = localFont({
  src: "../../styles/fonts/canela-regular/Canela-Regular.woff2",
});
// import Canela font from Google Fonts

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer: React.FC = () => {
  const {
    device: { isMobile },
  } = useApp();

  return (
    <footer className="flex flex-col items-center justify-center text-black pt-[136px] font-normal bg-[#EFEFE9]">
      <div className={`flex flex-col items-center`}>
        <div className={`text-[21px] ${inter.className}`}>
          {footer_data.followText}
        </div>
        <div className={`text-[44px] ${canelaFont.className}`}>
          {footer_data.instaUsername}
        </div>
      </div>
      <div
        className={`w-full flex justify-between lg:justify-center mt-[60px]`}
      >
        {footer_data.images.map((image, index) => (
          <div
            key={index}
            className={`
            w-[200px]
            h-[200px]
            relative
            mr-2
            md:mr-[28px]
            
              `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              className={`w-full max-w-[252px] max-h-[294px] h-full
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
      mt-[40px]
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
      <div
        className={`
        flex
        flex-col
        gap-3
        items-center
        text-[#000]
        text-[24px]
        font-bold
        `}
      >
        <div className="text-[#000] font-normal text-[14px] md:text-[24px]">
          {footer_data.address}
        </div>
        <div className="text-[#000] pb-8 flex text-[14px] font-normal md:text-[24px]">
          <p className="mr-2">{footer_data.businessHours.daysWorking} </p>
          {footer_data.businessHours.startWorking}h às{" "}
          {footer_data.businessHours.stopWorking}h
        </div>
      </div>
    </footer>
  );
};

export default Footer;
