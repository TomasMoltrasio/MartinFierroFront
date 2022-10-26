import { useContext, useState } from "react";
import CartContext from "context/CartContext";
import CartItem from "components/CartItem";
import { Modal, Text } from "@nextui-org/react";
import Checkout from "components/Checkout";

export default function CartContainer() {
  const { state, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const { cart } = state;

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
    <div className="w-full h-max flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Text h2 className="text-center text-gray-800 text-3xl">
          Carrito de compras
        </Text>
      </div>
      {cart && cart.length > 0 ? (
        <>
          <div
            className="flex flex-col items-center bg-slate-200 mt-4 border-2 border-black justify-center w-full md:w-2/6 lg:2/6 xl:w-2/6
      2xl:w-2/6 3xl:w-2/6 4xl:w-2/6 rounded-lg h-full"
          >
            {cart &&
              cart.length > 0 &&
              cart.map((product) => (
                <CartItem key={`cart-item-{product._id}`} product={product} />
              ))}
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <button
              className="w-1/2 sm:1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/4 3xl:w-1/4 4xl:w-1/4 h-10 font-semibold text-green-600 rounded-md mb-2 mt-4 border-2 disabled:hidden hover:scale-110 border-green-600"
              onClick={() => setShowModal(true)}
              disabled={!cart || cart.length === 0}
            >
              {getTotal() > 0
                ? `Confirmar pedido $${getTotal()}`
                : "Confirmar pedido"}
            </button>
            <button
              className="w-1/2 sm:1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/4 3xl:w-1/4 4xl:w-1/4 h-10 font-semibold text-red-500 rounded-md mb-4 border-2 disabled:hidden hover:scale-110 border-red-500"
              onClick={handleClearCart}
              disabled={!cart || cart.length === 0}
            >
              Vaciar carrito
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Text h3 className="text-center text-gray-800 text-3xl mt-24">
            No hay productos en el carrito
          </Text>
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
