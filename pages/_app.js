import "@/styles/globals.css";
import Head from "next/head";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          type="image/png"
          sizes="96x96"
          rel="icon"
          href="/favicon-custom.png"
        />
        <title>Portfolio | Mushfiqur Rahman</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
