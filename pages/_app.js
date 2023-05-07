import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <link
          type="image/png"
          sizes="96x96"
          rel="icon"
          href="/icons8-portfolio-96.png"
        /> */}
        <title>Portfolio | Mushfiqur Rahman</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
