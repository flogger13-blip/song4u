import Hero from "./Hero";

PLASMIC.registerComponent(Hero, {
  name: "Hero",
  props: {
    title: { type: "string", defaultValue: "A custom song for your unforgettable day" },
    subtitle: { type: "string", defaultValue: "Professional composers & vocalists craft your story into a bespoke track." },
    ctaText: { type: "string", defaultValue: "Start my song" },
    ctaHref: { type: "string", defaultValue: "#start" },
    secondaryText: { type: "string", defaultValue: "Listen to samples" },
    secondaryHref: { type: "string", defaultValue: "#samples" },
    imageUrl: { type: "string" },
  },
});import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "99pWKr1jR7UbrNyqP6AH1k",  // 👈 your Project ID
      token: "lcxX1Eh3ZkB7nv2ZWkesarOzihEtaWdryBv2NPLwfzycHeKmoDoC4QKYprIlCVYahIQMwLfQzqVJCP7dw"  // 👈 your API token
    }
  ],
  preview: true, // fetches latest changes even if unpublished
});

