import PlasmicRootProviderClient from '../components/PlasmicRootProvider.client';
import { PlasmicComponent } from '@plasmicapp/loader-nextjs';

export default function Home() {
  return (
    <PlasmicRootProviderClient>
      <PlasmicComponent component="Homepage" />
    </PlasmicRootProviderClient>
  );
}
