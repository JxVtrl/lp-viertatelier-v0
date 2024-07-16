import { ProductCard } from "@/components/ProductCard-component";
import { EntryProps } from "@/interfaces/contetfulData";
import { Hero } from "@/sections";
import { getEntries } from "@/services/useContentfulData";
import { treatProducts } from "@/utils/treatedData";
import Head from "next/head";
import Link from "next/link";

export interface Product {
  collection?: string;
  name: string;
  description?: string;
  price: number;
  sizes?: string[];
  colors: string[];
  images: string[];
  entryId?: string | string[] | undefined
}

function FestasViert({ products }: { products: any }) {
  return (
    <div className="container mx-auto py-[137px] px-5 bg-white">
      <Head>
        <title>Festas Viert</title>
        <meta name="description" content="Festas Viert" />
      </Head>
      <div className="grid grid-cols-2 container mx-auto lg:grid-cols-3 gap-x-[41px] gap-y-[120px] lg:gap-y-[23.61vh]">
        {products.map((product: Product, index: number) => (
          <Link href={`/collection/festas-viert/product/${product.entryId}`} key={index}>
            <ProductCard
              key={index}
              images={product.images}
              name={product.name}
              price={product.price}
              colors={product.colors}
            />
          </Link>
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
