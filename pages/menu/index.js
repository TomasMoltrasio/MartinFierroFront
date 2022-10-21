import Head from "next/head";
import MenuContainer from "containers/MenuContainer";
import { getAllProducts } from "services/products";

export default function Menu({ products }) {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <MenuContainer products={products} />;
    </>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();
  products.sort((a, b) => a.price - b.price);
  return {
    props: {
      products,
    },
  };
}
