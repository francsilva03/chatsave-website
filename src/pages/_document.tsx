import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Aquí insertamos el script directamente usando Next.js Script */}
        <Script
          id="voiceflow-chat-script"
          strategy="beforeInteractive"
          src="https://cdn.voiceflow.com/widget/bundle.mjs"
          onLoad={() => {
            window.voiceflow.chat.load({
              verify: {
                projectID: process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID,
              },
              url: process.env.NEXT_PUBLIC_VOICEFLOW_URL,
              versionID: process.env.NEXT_PUBLIC_VOICEFLOW_VERSION_ID,
            });

            setTimeout(() => {
              const shadowHost = document.getElementById("voiceflow-chat");
              const launcher =
                shadowHost?.shadowRoot?.querySelector(".vfrc-launcher");
              if (launcher) {
                launcher.addEventListener("click", () => {
                  setTimeout(() => {
                    const widget =
                      shadowHost?.shadowRoot?.querySelector(
                        ".vfrc-widget--chat"
                      );
                    if (widget) {
                      const watermark = widget.querySelector(
                        ".vfrc-footer--watermark"
                      );
                      if (watermark) {
                        watermark.innerHTML =
                          'Desarrollado por <a target="_blank" href="https://chatsave.vercel.app/" rel="noreferrer"><span style="color: #000000;">Chat</span><span style="color: #a21caf; font-weight: bold;">Save</span> ⚡️</a>';
                      }
                    }
                  }, 100);
                });
              }
            }, 1000);
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
