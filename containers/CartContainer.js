import { useContext, useState } from "react";
import CartContext from "context/CartContext";
import CartItem from "components/CartItem";
import { Modal, Text, Button } from "@nextui-org/react";
import Checkout from "components/Checkout";
import { MdRestaurantMenu } from "react-icons/md";
import { useRouter } from "next/router";

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
            <button
              className="w-11/12 sm:1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/4 3xl:w-1/4 4xl:w-1/4 h-10 font-semibold text-green-600 rounded-md mb-2 mt-4 border-2 disabled:hidden hover:scale-110 border-green-600"
              onClick={() => setShowModal(true)}
              disabled={!cart || cart.length === 0}
            >
              {getTotal() > 0
                ? `Confirmar pedido $${getTotal()}`
                : "Confirmar pedido"}
            </button>
            <button
              className="w-11/12 sm:1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/4 3xl:w-1/4 4xl:w-1/4 h-10 font-semibold text-red-500 rounded-md mb-4 border-2 disabled:hidden hover:scale-110 border-red-500"
              onClick={handleClearCart}
              disabled={!cart || cart.length === 0}
            >
              Vaciar carrito
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Text h3 className="text-center text-gray-800 text-3xl mt-24 mb-8">
            No hay productos en el carrito
          </Text>
          <Button
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
      <Modal
        open={showModal}
        onClose={handleShowModal}
        closeButton
        blur
        width="400px"
        height="100%"
      >
        <Checkout handleShowModal={handleShowModal} />
      </Modal>
    </div>
  );
}
