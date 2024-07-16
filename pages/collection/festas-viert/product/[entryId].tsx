"use client";

import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import { ProductShowcase } from "@/components/product-showcase";

const Product: React.FC = () => {
  const {
    query: { entryId },
  } = useRouter();

  return (
    <>
      <Head>
        <title>Festas Viert - Produto {entryId}</title>
      </Head>
      <div>
        <ProductShowcase entryId={entryId} />
      </div>
    </>
  );
};

export default Product;
