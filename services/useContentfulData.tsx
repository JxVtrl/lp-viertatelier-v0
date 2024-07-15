import { createClient } from "contentful";

type Entry = {
  contentType: "produtos";
};

type SingleEntryParams = {
  entryId: string;
};

export const getEntries = async ({ contentType }: Entry) => {
  const contentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  const entries = await contentful.getEntries({ content_type: contentType });

  return entries.items;
};

export const getSingleEntry = async ({ entryId }: SingleEntryParams) => {
  const contentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  const entry = await contentful.getEntry(entryId);

  return entry;
};
