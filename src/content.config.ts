import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/news" }),
});

const homepages = defineCollection({
  loader: file("./src/contents/data/homepages.json"),
});

export const collections = { homepages, news };
