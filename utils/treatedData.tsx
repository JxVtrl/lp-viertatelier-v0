import { EntryProps, Product } from "@/interfaces/contetfulData";

export const treatProduct = (products: EntryProps): Product => {
  const treatedProducts = {
    collection: products.fields.collection as "Viert Festas" | "Viert Noivas",
    name: products.fields.name,
    description: products.fields.description,
    price: products.fields.price,
    sizes: products.fields.sizes as ("P" | "PP" | "M" | "G" | "GG")[],
    colors: products.fields.colors,
    images: products.fields.images!.map(
      (image) => "https:" + image.fields.file.url
    ),
    entryId: products.sys.id,
  };

  return treatedProducts;
};

export const treatProducts = (allProducts: EntryProps[]): Product[] => {
  const treatedProducts = allProducts.map((entry) => {
    return {
      collection: entry.fields.collection as "Viert Festas" | "Viert Noivas",
      name: entry.fields.name,
      description: entry.fields.description,
      price: entry.fields.price,
      sizes: entry.fields.sizes as ("P" | "PP" | "M" | "G" | "GG")[],
      colors: entry.fields.colors,
      images: entry.fields.images!.map(
        (image) => "https:" + image.fields.file.url
      ),
      entryId: entry.sys.id,
    };
  });

  return treatedProducts;
};

