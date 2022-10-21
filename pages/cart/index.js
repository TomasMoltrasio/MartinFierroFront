import CartContainer from "containers/CartContainer";
import Head from "next/head";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Carrito</title>
      </Head>
      <CartContainer />
    </>
  );
}
