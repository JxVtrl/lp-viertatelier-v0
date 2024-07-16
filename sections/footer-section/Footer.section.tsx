import React from "react";
import { footer_data } from "@/data/footer-data";
import { midia_data } from "@/data/midia-data";
import { useApp } from "@/context/AppContext";
import localFont from "next/font/local";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { collections_data } from "@/data/collections-data";

const canelaFont = localFont({
  src: "../../styles/fonts/canela/Canela-Regular.woff2",
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
    <>
      {isMobile ? (
        <div className="relative h-[360px] mt-[7vh] md:mt-[120px] w-full">
          <Image
            layout="fill"
            className="absolute bg-cover h-full object-cover bg-center"
            src={collections_data.festas_viert.images[3].src}
            alt={collections_data.festas_viert.images[3].alt}
          />
        </div>
      ) : (
        <div className="relative h-[64.17vh]  w-full">
          <Image
            quality={100}
            layout="fill"
            className="absolute bg-cover  h-full object-cover bg-top"
            src={collections_data.festas_viert.images[3].src}
            alt={collections_data.festas_viert.images[3].alt}
          />
        </div>
      )}

      <footer
        className="flex flex-col items-center justify-center text-black pt-[7vh] md:pt-[120px] font-normal bg-[#EFEFE9]"
        id="contact"
      >
        <div className={`flex flex-col items-center`}>
          <div
            className={`text-[17px] md:text-[21px] uppercase ${inter.className}`}
          >
            {footer_data.followText}
          </div>
          <div className={`text-[32px] md:text-[44px] ${canelaFont.className}`}>
            {footer_data.instaUsername}
          </div>
        </div>
        <div
          className={`lg:w-full flex justify-between gap-1 lg:justify-center mt-[7vh] md:mt-[120px]`}
        >
          {footer_data.images.map((image, index) => (
            <div
              key={index}
              className={`
            w-[20vw]
            max-w-[200px]
            h-[200px]
            relative
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
      mt-[7vh]
      md:mt-[120px]
    "
          >
            {midia_data.map((midia) => (
              <Link target="blank" key={midia.id} href={midia.link}>
                <li className="cursor-pointer">{midia.icon}</li>
              </Link>
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
          <div className="text-[#000] pb-8 flex text-[17px] md:text-[21px] font-normal ">
            <p className="mr-2">
              {footer_data.businessHours.daysWorking}{" "}
              {footer_data.businessHours.startWorking}h às{" "}
              {footer_data.businessHours.stopWorking}h
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
