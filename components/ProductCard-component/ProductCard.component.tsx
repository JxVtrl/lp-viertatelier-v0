import Image from "next/image";

import { Inter } from "next/font/google";
import { Product } from "@/pages/collection/festas-viert";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ProductCard({ images, name, price, colors }: Product) {
  return (
    <div className={`${inter.className} flex flex-col gap-5 `}>
      <div className="relative lg:w-[25.89vw] md:h-[66.85vh] lg:max-h-[66.85vh] min-h-[375px] ">
        <Image
          layout="fill"
          src={images[0]}
          alt="Product"
          className="object-cover bg-center w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start">
        <h3 className={"uppercase"}>{name}</h3>
        <p className="text-lg font-bold">R$ {price}</p>
        <p className={`text-[14px]`}>
          {colors.toString().split(",").length} cores
        </p>
      </div>
    </div>
  );
}
