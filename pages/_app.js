import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "../containers/Layout";
import Head from "next/head";
import { CartContextProvider } from "context/CartContext";
import { UserContextProvider } from "context/UserContext";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <UserContextProvider>
        <CartContextProvider>
          <Head>
            <title>Martin Fierro</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta
              name="keywords"
              content="Martin Fierro, restaurante, comida, take away, comida casera, Chascomus, meganesas"
            />
            <meta
              name="description"
              content="Martin Fierro, restaurante de comida y take away"
            />
            <meta
              name="robots"
              content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <meta name="google" content="notranslate" />
            <meta name="google" content="nositelinkssearchbox" />
            <meta name="google-site-verification" content="verified" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <link rel="icon" href="/LogoMartinFierro.svg" />
          </Head>
          <Layout>
            <Component {...pageProps} />
            <Analytics />
          </Layout>
        </CartContextProvider>
      </UserContextProvider>
    </NextUIProvider>
  );
}

export default MyApp;
