import { ProductCard } from "@/components/ProductCard-component";
import { EntryProps } from "@/interfaces/contetfulData";
import { Hero } from "@/sections";
import { getEntries } from "@/services/useContentfulData";
import { treatProducts } from "@/utils/treatedData";
import Head from "next/head";

export interface Product {
  collection?: string;
  name: string;
  description?: string;
  price: number;
  sizes?: string[];
  colors: string[];
  images: string[];
}

function FestasViert({ products }: { products: any }) {
  console.log(products);

  return (
    <div className="container mx-auto py-[137px] px-5 bg-white">
      <Head>
        <title>Festas Viert</title>
        <meta name="description" content="Festas Viert" />
      </Head>
      <div className="grid grid-cols-2 container mx-auto lg:grid-cols-3 gap-x-[41px] gap-y-[120px] lg:gap-y-[23.61vh]">
        {products.map((product: Product, index: number) => (
          <ProductCard
            key={index}
            images={product.images}
            name="Festa Viert"
            price={1590}
            colors={["Rosa", "Azul", "Amarelo"]}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const [allProducts] = (await Promise.all([
    getEntries({
      contentType: "produtos",
    }),
  ])) as any;

  const products = treatProducts(allProducts).filter(
    (product) => product.collection === "Viert Festas"
  );

  return {
    props: {
      products,
    },
    revalidate: 60 * 5, // 5 minutes
  };
};

export default FestasViert;
