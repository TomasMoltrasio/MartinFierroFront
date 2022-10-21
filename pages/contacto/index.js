import Head from "next/head";
import ContactContainer from "containers/ContactContainer";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactContainer />
    </>
  );
}
