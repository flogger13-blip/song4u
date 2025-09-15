import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";
import Hero from "./Hero";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "99pWKr1jR7UbrNyqP6AH1k", // 👈 your Project ID
      token: "lcxX1Eh3ZkB7nv2ZWkesarOzihEtaWdryBv2NPLwfzycHeKmoDoC4QKYprIlCVYahIQMwLfQzqVJCP7dw" // 👈 your Public API Token
    }
  ],
  preview: true, // fetches latest changes even if unpublished
});

// ✅ Register your Hero component here
PLASMIC.registerComponent(Hero, {
  name: "Hero",
  props: {
    title: "string",
    subtitle: "string",
    ctaText: "string",
    ctaHref: "string",
  },
});