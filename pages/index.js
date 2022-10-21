import HomeContainer from "containers/HomeContainer";
import Head from "next/head";
import { getProduct } from "services/products";

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

export async function getStaticProps() {
  const product = await getProduct("63521af14ac3d867109dcd75");

  return {
    props: {
      product,
    },
  };
}
