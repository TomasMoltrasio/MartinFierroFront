import Head from "next/head";
import { getAllProducts } from "services/products";
import MenuFeatureContainer from "containers/MenuFeatureContainer";

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <MenuFeatureContainer />;
    </>
  );
}
