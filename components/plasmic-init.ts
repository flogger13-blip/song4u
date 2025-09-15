import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "99pWKr1jR7UbrNyqP6AH1k",  // 👈 your Project ID
      token: "lcxX1Eh3ZkB7nv2ZWkesarOzihEtaWdryBv2NPLwfzycHeKmoDoC4QKYprIlCVYahIQMwLfQzqVJCP7dw"  // 👈 your API token
    }
  ],
  preview: true, // fetches latest changes even if unpublished
});

