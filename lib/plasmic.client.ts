'use client';

import { initPlasmicLoader } from '@plasmicapp/loader-nextjs';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: '99pWKr1jR7UbrNyqP6AH1k',
      token:
        'lcxX1Eh3ZkB7nv2ZWkesarOzihEtaWdryBv2NPLwfzycHeKmoDoC4QKYprILCVYahIQ',
    },
  ],
  preview: true,
});