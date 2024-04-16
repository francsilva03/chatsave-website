import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
     <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(d, t) {
                  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                  v.onload = function() {
                    window.voiceflow.chat.load({
                      verify: { projectID: '66114eb3a262f3f803c77ef6' },
                      url: 'https://general-runtime.voiceflow.com',
                      versionID: 'production'
                    });
                  }
                  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
                })(document, 'script');
              `,
            }}
          />
      <Head
        title="Agencia de automatización de IA"
        description="Somos una agencia de automzación de Inteligencia Artificial"
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
