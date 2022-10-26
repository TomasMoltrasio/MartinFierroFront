import Head from "next/head";
import MenuFeatureContainer from "containers/MenuFeatureContainer";

export default function Menu({ products }) {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <MenuFeatureContainer />;
    </>
  );
}
