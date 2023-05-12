import { useContext, useState } from "react";
import CartContext from "context/CartContext";
import CartItem from "components/CartItem";
import { Modal, Text, Button } from "@nextui-org/react";
import Checkout from "components/Checkout";
import { MdRestaurantMenu } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CartContainer() {
  const { state, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const { cart } = state;
  const router = useRouter();

  const handleClearCart = () => {
    clearCart();
  };

  const handleShowModal = () => {
    setShowModal(false);
  };

  const getTotal = () => {
    if (cart && cart.length > 0) {
      return cart.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0);
    }
    return 0;
  };

  const getTotalWithDiscount = () => {
    const discount = 0.1;
    if (cart && cart.length > 0) {
      return Math.round((getTotal() - getTotal() * discount) / 100) * 100;
    }
    return 0;
  };

  const existDrink = () => {
    if (cart && cart.length > 0) {
      return cart.some((product) => product.category === "Bebidas");
    }
    return false;
  };

  const existDessert = () => {
    if (cart && cart.length > 0) {
      return cart.some((product) => product.category === "Postres");
    }
    return false;
  };

  return (
    <div className="w-full h-max flex flex-col items-center justify-start">
      {cart && cart.length > 0 ? (
        <>
          <div className="flex flex-col items-center justify-center w-full h-full mt-4">
            <Text h2 className="text-center text-gray-800 text-3xl">
              Carrito de compras
            </Text>
          </div>
          <div
            className="flex flex-col items-center bg-indigo-900/20 mt-4 border-2 border-black justify-center w-full md:w-2/6 lg:2/6 xl:w-2/6
      2xl:w-2/6 3xl:w-2/6 4xl:w-2/6 rounded-lg h-full"
          >
            {cart &&
              cart.length > 0 &&
              cart.map((product) => (
                <CartItem
                  key={`cart-item-${product._id}` + Math.random()}
                  product={product}
                />
              ))}
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Text h3 className="text-center text-gray-800 text-lg mt-4">
              Si abonas en efectivo
              <span className="text-gray-800 font-semibold"> $</span>
              <span className="text-green-600 font-semibold">
                {" "}
                {getTotalWithDiscount()}
              </span>
            </Text>
            <button
              aria-label="Confirmar pedido"
              className="w-11/12 sm:w-7/12 md:w-7/12 lg:w-7/12 xl:w-4/12 2xl:w-4/12 3xl:w-4/12 4xl:w-4/12 h-10 font-semibold text-green-600 rounded-md mb-2 mt-4 border-2 disabled:hidden hover:bg-green-600 hover:text-white hover:border-green-900 border-green-600"
              onClick={() => setShowModal(true)}
              disabled={!cart || cart.length === 0}
            >
              {getTotal() > 0
                ? `Confirmar pedido $${getTotal()}`
                : "Confirmar pedido"}
            </button>
            <button
              aria-label="Vaciar carrito"
              className="w-11/12 sm:w-7/12 md:w-7/12 lg:w-7/12 xl:w-4/12 2xl:w-4/12 3xl:w-4/12 4xl:w-4/12 h-10 font-semibold text-red-500 rounded-md mb-4 border-2 disabled:hidden hover:bg-red-600 hover:text-white hover:border-red-900 border-red-500"
              onClick={handleClearCart}
              disabled={!cart || cart.length === 0}
            >
              Vaciar carrito
            </button>
            <div className="flex flex-col md:flex-row items-center justify-center w-full md:space-x-1">
              {!existDrink() && (
                <Link href="/menu/8">
                  <a
                    aria-label="Ver bebidas"
                    className="w-11/12 md:w-1/6 h-10 flex justify-center font-semibold text-blue-500 rounded-md mb-1 border-2 disabled:hidden hover:bg-blue-500 hover:text-white transition border-blue-500"
                  >
                    ¿Querés agregar alguna bebida?
                  </a>
                </Link>
              )}
              {!existDessert() && (
                <Link href="/menu/7">
                  <a
                    aria-label="Ver postres"
                    className="w-11/12 md:w-1/6 h-10 flex justify-center font-semibold text-blue-500 rounded-md mb-1 border-2 disabled:hidden hover:bg-blue-500 hover:text-white transition border-blue-500"
                  >
                    ¿Querés agregar algún postre?
                  </a>
                </Link>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Text h3 className="text-center text-gray-800 text-3xl mt-24 mb-8">
            No hay productos en el carrito
          </Text>
          <Button
            aria-label="Ir al menú"
            className="w-1/12 h-12 text-black text-lg bg-white rounded-full shadow-md hover:shadow-none hover:scale-110 transition-all duration-300 ease-in-out transform"
            bordered
            borderWeight={2}
            color={"#000"}
            onClick={() => router.push("/menu")}
            iconRight={<MdRestaurantMenu size={20} />}
          >
            Ir al menú
          </Button>
        </div>
      )}
      <Modal open={showModal} onClose={handleShowModal} closeButton blur>
        <Checkout handleShowModal={handleShowModal} />
      </Modal>
    </div>
  );
}
