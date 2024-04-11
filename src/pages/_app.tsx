import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GoogleAnalytics } from '@next/third-parties/google';

import RootLayout from '@/components/layouts/Root';
import WithNavigationFooter from '@/components/layouts/WithNavigationFooter';
import Provider from '@/providers';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import '@/styles/main.css';

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function getDefaultLayout(page: ReactElement): ReactNode {
  return <WithNavigationFooter>{page}</WithNavigationFooter>;
}

function App({ Component, pageProps, router }: AppPropsWithLayout) {
  let getLayout;

  if (router.query.simpleLayout) {
    getLayout = (page: ReactElement) => <main>{page}</main>;
  } else if (Component.getLayout) {
    getLayout = Component.getLayout;
  } else {
    getLayout = getDefaultLayout;
  }

  useEffect(() => {
    // Cargar el script después de que el componente haya sido montado
    (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '661129d4fa1602136e80a749' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
    })(document, 'script');
  }, []); // La matriz de dependencias vacía asegura que este efecto se ejecute solo una vez, después del montaje inicial

  return (
    <Provider>
      <RootLayout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {getLayout(<Component {...pageProps} />)}
        <GoogleAnalytics gaId="G-FB9QLDNKNN" />
      </RootLayout>
    </Provider>
  );
}

export default App;
