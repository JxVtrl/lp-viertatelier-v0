import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
  /* colors: string[]; Puxar pela quantidade de strings */
  colors: string[];
};

export default function ProductCard({
  image,
  name,
  price,
  colors,
}: ProductCardProps) {
  return (
    <div className={`${inter.className} flex flex-col gap-5 `}>
      <div className="relative lg:w-[25.89vw] lg:h-[66.85vh] lg:max-h-[66.85vh] h-[502px] ">
        <Image
          layout="fill"
          src={image}
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
