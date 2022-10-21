import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "../containers/Layout";
import Head from "next/head";
import { CartContextProvider } from "context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <CartContextProvider>
        <Head>
          <title>Martin Fierro</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </NextUIProvider>
  );
}

export default MyApp;
