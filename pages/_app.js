import Main from "@/components/Main";
import Head from "next/head";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PokeDex</title>
        <link rel="shortcut icon" href="FavIcon.ico" type="image/x-icon"></link>
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
