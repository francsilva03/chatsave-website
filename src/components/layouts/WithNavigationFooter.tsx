import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Toaster from '@/components/Toaster';

import type { PropsWithChildren } from 'react';

function WithNavigationFooter({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Toaster />
      <Footer />
    </>
  );
}

export default WithNavigationFooter;
