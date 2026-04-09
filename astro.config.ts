import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import { siteDark } from "./src/ec-theme";

// https://astro.build/config
const config = defineConfig({
  site: "https://jonathan-meaney.dev",
  output: "static",
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
  },
  integrations: [
    expressiveCode({
      themes: [siteDark],
    }),
    mdx(),
    sitemap(),
  ],
});

export default config;
