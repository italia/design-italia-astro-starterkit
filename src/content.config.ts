import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/news" }),
});
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/works" }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/events" }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/pages" }),
});

const config = defineCollection({
  loader: file("./src/contents/data/config.json"),
});

const homepages = defineCollection({
  loader: file("./src/contents/data/homepages.json"),
});

export const collections = { pages, news, works, events, config, homepages };
