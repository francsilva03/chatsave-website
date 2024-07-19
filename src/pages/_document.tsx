import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  const projectID = process.env.VOICEFLOW_PROJECT_ID;
  const url = process.env.VOICEFLOW_URL;
  const versionID = process.env.VOICEFLOW_VERSION_ID;

  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '${projectID}' },
                    url: '${url}',
                    versionID: '${versionID}'
                  });

                  setTimeout(() => {
                    const shadowHost = document.getElementById('voiceflow-chat')
                    const launcher = shadowHost.shadowRoot.querySelector('.vfrc-launcher');
                    if (launcher) {
                      launcher.addEventListener('click', () => {
                        setTimeout(() => {
                          const widget = shadowHost.shadowRoot.querySelector('.vfrc-widget--chat');
                          if (widget) {
                            const watermark = widget.querySelector('.vfrc-footer--watermark');
                            if (watermark) {
                             watermark.innerHTML = 'Desarrollado por <a target="_blank" href="https://chatsave.vercel.app/" rel="noreferrer"><span style="color: #000000;">Chat</span><span style="color: #a21caf; font-weight: bold;">Save</span> ⚡️</a>';
                            }
                          }
                        }, 100); 
                      });
                    }
                  }, 1000); 
                };
                v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
                v.type = "text/javascript";
                s.parentNode.insertBefore(v, s);
              })(document, "script");
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
