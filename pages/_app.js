import "@/styles/globals.css";
// import { Inter, Reem_Kufi, Comme, Ysabeau } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
// const reemKufi = Reem_Kufi({ subsets: ["latin"] });
// const comme = Comme({ subsets: ["latin"] });
// const ysabeau = Ysabeau({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
