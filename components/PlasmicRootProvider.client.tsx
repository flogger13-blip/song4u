'use client';

import React from 'react';
import { PlasmicRootProvider } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from './plasmic-init';

export default function PlasmicRootProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PlasmicRootProvider loader={PLASMIC}>{children}</PlasmicRootProvider>;
}
