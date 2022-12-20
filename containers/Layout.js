import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@nextui-org/react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="h-screen min-h-screen w-screen flex flex-auto flex-col items-center justify-between">
      <Head>
        <script src="https://app.embed.im/snow.js" defer></script>
      </Head>
      <Header />
      <Container
        as="main"
        xl
        className="flex-auto flex flex-col items-center justify-center bg-gradient-to-b from-indigo-600/10 via-indigo-600/20 to-indigo-600/30"
      >
        {children}
      </Container>
      <Footer />
    </div>
  );
}
