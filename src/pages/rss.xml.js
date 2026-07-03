import rss from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "HopeBloom",
    description: "Mental health and wellness resources.",
    site: context.site,
    items: [
      {
        title: "Your Safe Space For Mental Health",
        description: "Prioritize your mental well-being with HopeBloom.",
        pubDate: new Date("2024-01-01"),
        link: "/blog",
      },
    ],
  });
}