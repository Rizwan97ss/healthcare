import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    author: z.string(),
    date: z.date(),
    category: z.string(),
  }),
});

export const collections = {
  blog,
};