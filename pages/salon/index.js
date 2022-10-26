import Head from "next/head";
import SalonContainer from "containers/SalonContainer";

export default function Salon() {
  return (
    <>
      <Head>
        <title>Salon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SalonContainer />
    </>
  );
}
