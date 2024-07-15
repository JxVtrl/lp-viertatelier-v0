import { ProductCard } from "@/components/ProductCard-component";
import Head from "next/head";

export default function FestasViert() {
  return (
    <div className="container mx-auto py-[137px] px-5 bg-white">
      <Head>
        <title>Festas Viert</title>
        <meta name="description" content="Festas Viert" />
      </Head>
      <div className="grid grid-cols-2 container mx-auto lg:grid-cols-3 gap-x-[41px] gap-y-[120px] lg:gap-y-[23.61vh]">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCard
            key={index}
            image="/assets/images/gray-image.png"
            name="Festa Viert"
            price="1590"
            colors={["Rosa", "Azul", "Amarelo"]}
          />
        ))}
      </div>
    </div>
  );
}
