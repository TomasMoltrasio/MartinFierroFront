import Head from "next/head";
import { getAllProducts } from "services/products";
import DashboardContainer from "containers/DashboardContainer";

export default function Dashboard({ products }) {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardContainer products={products} />
    </>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();
  const productsSorted = products?.sort((a, b) => a.price - b.price);

  return {
    props: {
      products: productsSorted,
    },
  };
}
