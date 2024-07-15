import { EntryProps, Product } from "@/interfaces/contetfulData"
import { Entry } from "contentful"

export const treatHomeBanner = (c: any[]) => {
  const treatedHomeBanner = c.map((homeBanner) => {
    let { title, image } = homeBanner.fields

    return {
      alt: title,
      src: `https://${image.fields.file.url.slice(2)}`,
    }
  })

  treatedHomeBanner.sort((a, b) => {
    return a.alt.localeCompare(b.alt)
  })

  return { images: treatedHomeBanner }
}

export const treatCustomers = (c: any[]) => {
  const treatedCustomers = c.map((customer) => {
    let { title, logo } = customer.fields

    return {
      title,
      banner: `https://${logo.fields.file.url.slice(2)}`,
    }
  })

  return treatedCustomers
}

export const treatProducts = (allProducts: EntryProps[]): Product[] => {
  console.log(JSON.stringify(allProducts, null, 2));

  const treatedProducts = allProducts.map(entry => {
    return {
      collection: entry.fields.collection as "Viert Festas" | "Viert Noivas",
      name: entry.fields.name,
      description: entry.fields.description,
      price: entry.fields.price,
      sizes: entry.fields.sizes as ("P" | "PP" | "M" | "G" | "GG")[],
      colors: entry.fields.colors,
      images: entry.fields.images!.map(image => image.fields.file.url)
    };
  });

  return treatedProducts;
};

export const treatEventsImages =  (c: any[]) => {
  const treatedEventsImages = c.map((item) => {
    return {
      alt: item.fields.image.fields.title,
      src: `https://${item.fields.image.fields.file.url.slice(2)}`,
    }
  })

  return treatedEventsImages
}
