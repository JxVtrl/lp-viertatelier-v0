"use client";

import React from "react";

import { useParams } from "next/navigation";
import Head from "next/head";

const Product: React.FC = () => {
  const params = useParams<{ id: string }>();

  console.log("PARAMS", params.id);

  return (
    <>
      <Head>
        <title>Noivas Viert - Produto {params?.id}</title>
      </Head>

      <div>
        <h1>Product {params?.id}</h1>
      </div>
    </>
  );
};

export default Product;
