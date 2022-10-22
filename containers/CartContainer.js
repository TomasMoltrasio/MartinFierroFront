import { useContext } from "react";
import CartContext from "context/CartContext";
import CartItem from "components/CartItem";
import { Grid } from "@nextui-org/react";

export default function CartContainer() {
  const { state, clearCart } = useContext(CartContext);
  const { cart } = state;

  const handleClearCart = () => {
    clearCart();
  };

  const handleCheckout = () => {
    console.log("Checkout");
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
    <div className="w-full h-max flex flex-col items-center justify-start mt-8 ">
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Carrito</h1>
        <Grid.Container justify="center" gap={2}>
          {cart && cart.length > 0 ? (
            <div className="flex flex-row items-center justify-center mx-2 w-full sm:1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/4 3xl:w-1/4 4xl:w-1/4 h-full">
              <div className="flex flex-col items-start justify-center w-full h-full border-2 border-black rounded-lg">
                {cart && cart.length > 0
                  ? cart.map((product) => (
                      <Grid
                        justify="start"
                        xs={12}
                        key={`cart-item-${product.id}`}
                      >
                        <CartItem product={product} />
                      </Grid>
                    ))
                  : null}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="text-xl font-base mb-4">
                No hay productos en el carrito
              </h1>
            </div>
          )}
        </Grid.Container>
      </div>
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <button
          className="w-1/2 sm:1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/4 3xl:w-1/4 4xl:w-1/4 h-10 font-semibold text-green-600 rounded-md mb-2 mt-4 border-2 disabled:hidden hover:scale-110 border-green-600"
          onClick={handleCheckout}
          disabled={!cart || cart.length === 0}
        >
          {getTotal() > 0
            ? `Confirmar pedido $${getTotal()}`
            : "Confirmar pedido"}
        </button>
      </div>
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <button
          className="w-1/2 sm:1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/4 3xl:w-1/4 4xl:w-1/4 h-10 font-semibold text-red-500 rounded-md mb-4 border-2 disabled:hidden hover:scale-110 border-red-500"
          onClick={handleClearCart}
          disabled={!cart || cart.length === 0}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}
