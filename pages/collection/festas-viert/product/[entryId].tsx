"use client";

import React, { useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import { ProductShowcase } from "@/components/product-showcase";
import { getSingleEntry } from "@/services/useContentfulData";
import { treatProduct } from "@/utils/treatedData";

const Product: React.FC = () => {
   const [name, setName] = useState<string>('');
  const {
    query: { entryId },
  } = useRouter();

  const getProductName = async () => {
    console.log('aqui')
    if(!entryId || Array.isArray(entryId)) return
    const product = await getSingleEntry({ entryId })
    const treatedProduct = treatProduct(product as any)
    console.log(treatedProduct)
    setName(treatedProduct.name)
  }

  useEffect(() => {
    getProductName()
  },[entryId])

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div>
        <ProductShowcase entryId={entryId} />
      </div>
    </>
  );
};

export default Product;
