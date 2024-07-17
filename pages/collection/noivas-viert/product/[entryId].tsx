"use client";

import React, { useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import { ProductShowcase } from "@/components/product-showcase";
import { getSingleEntry } from "@/services/useContentfulData";
import { treatProduct } from "@/utils/treatedData";
import Layout from "@/layout/layout";
import axios from "axios";
import { InstaItem } from "@/sections/footer-section/Footer.section";

const Product: React.FC<{
  insta: InstaItem[];
}> = ({ insta }) => {
  const [name, setName] = useState<string>("");
  const {
    query: { entryId },
  } = useRouter();

  const getProductName = async () => {
    if (!entryId || Array.isArray(entryId)) return;
    const product = await getSingleEntry({ entryId });
    const treatedProduct = treatProduct(product as any);
    setName(treatedProduct.name);
  };

  useEffect(() => {
    getProductName();
  }, [entryId]);

  return (
    <Layout insta={insta}>
      <Head>
        <title>{name}</title>
      </Head>
      <div>
        <ProductShowcase entryId={entryId} />
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const token = process.env.INSTA_TOKEN;
  const fields = "media_url,media_type,permalink";
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
  const { data } = await axios.get(url);

  return {
    props: {
      insta: data,
    },
    revalidate: 60 * 5, // 5 minutes
  };
};

export default Product;
