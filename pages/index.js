import HomeContainer from "containers/HomeContainer";
import Head from "next/head";
import { getActiveDay } from "services/products";

export default function Home({ product }) {
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <HomeContainer product={product} />;
    </>
  );
}

export async function getServerSideProps() {
  const product = await getActiveDay();

  return {
    props: {
      product,
    },
  };
}
