import Head from "next/head";
import { getProductsByCategory } from "services/products";
import MenuFeatureContainer from "containers/MenuFeatureContainer";

export default function Menu({ products }) {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <MenuFeatureContainer products={products} />;
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductsByCategory("Empanadas");

  return {
    props: {
      products,
    },
  };
}
