import HomeContainer from "containers/HomeContainer";
import Head from "next/head";
import { getActiveDay } from "services/products";

export default function Home({ product }) {
  return (
    <>
      <Head>
        <title>Martin Fierro</title>
      </Head>
      <HomeContainer product={product} />;
    </>
  );
}

export async function getStaticProps() {
  const product = (await getActiveDay()) || null;

  return {
    props: {
      product,
    },
  };
}
