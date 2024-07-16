"use client";

import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

const Product: React.FC = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <Head>
        <title>Festas Viert - Produto {id}</title>
      </Head>
      <div>
        <h1>Product {id}</h1>
      </div>
    </>
  );
};

export default Product;
