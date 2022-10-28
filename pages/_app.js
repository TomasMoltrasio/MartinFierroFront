import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "../containers/Layout";
import Head from "next/head";
import { CartContextProvider } from "context/CartContext";
import { UserContextProvider } from "context/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <UserContextProvider>
        <CartContextProvider>
          <Head>
            <title>Martin Fierro</title>
            <meta
              name="description"
              content="Martin Fierro, restaurante de comida y take away"
            />
            <link rel="icon" href="/LogoMartinFierro.svg" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
      </UserContextProvider>
    </NextUIProvider>
  );
}

export default MyApp;
