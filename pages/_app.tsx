import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="zu8tXGuvfRiIGVzRaueD4JeaSWZuSOPBZsYJkqlerNo" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
