'use client';

import React from 'react';
import { PlasmicRootProvider } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from './plasmic-init';
import Hero from './Hero';

// 👇 Register your code component(s) with Plasmic
PLASMIC.registerComponent(Hero, {
  name: 'Hero',
  props: {
    title: 'string',
    subtitle: 'string',
    ctaText: 'string',
    ctaHref: 'string',
  },
});

export default function PlasmicRootProviderClient(
  props: Omit<React.ComponentProps<typeof PlasmicRootProvider>, 'loader'>
) {
  return <PlasmicRootProvider loader={PLASMIC} {...props} />;
}
