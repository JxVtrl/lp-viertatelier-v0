import React, { useCallback, useEffect, useState } from "react";
import { Product } from "@/interfaces/contetfulData";
import { getSingleEntry } from "@/services/useContentfulData";

type ProductShowcaseProps = {
  entryId: string | string[] | undefined;
};

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ entryId }) => {
  const [product, setProduct] = useState<Product | null>(null);

  const getProduct = useCallback(() => {
    if (!entryId || Array.isArray(entryId)) return;
    const prod = getSingleEntry({ entryId });
    console.log(JSON.stringify(prod, null, 2));
  }, [entryId]);

  useEffect(() => {
    getProduct();
  }, []);

  return <div />;
};

export default ProductShowcase;
