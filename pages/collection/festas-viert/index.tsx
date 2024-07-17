import { ProductCard } from "@/components/ProductCard-component";
import { EntryProps } from "@/interfaces/contetfulData";
import Layout from "@/layout/layout";
import { Hero } from "@/sections";
import { InstaItem } from "@/sections/footer-section/Footer.section";
import { getEntries } from "@/services/useContentfulData";
import { treatProducts } from "@/utils/treatedData";
import axios from "axios";
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
  entryId?: string | string[] | undefined;
}

function FestasViert({
  products,
  insta,
}: {
  products: any;
  insta: InstaItem[];
}) {
  return (
    <Layout insta={insta}>
      <div className="container mx-auto pt-[5.47vh] pb-[4.22vh] lg:pb-[12.69vh] px-[2.04vw] bg-white">
        <Head>
          <title>Festas Viert</title>
          <meta name="description" content="Festas Viert" />
        </Head>
        <div className="grid grid-cols-2 container mx-auto lg:grid-cols-3 gap-x-[2.14vw] gap-y-[4.17vh] lg:gap-y-[23.61vh]">
          {products.map((product: Product, index: number) => (
            <Link
              href={`/collection/festas-viert/product/${product.entryId}`}
              key={index}
            >
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
    </Layout>
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

  const token = process.env.INSTA_TOKEN;
  const fields = "media_url,media_type,permalink";
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
  const { data } = await axios.get(url);

  return {
    props: {
      products,
      insta: data.data,
    },
    revalidate: 60 * 5, // 5 minutes
  };
};

export default FestasViert;
