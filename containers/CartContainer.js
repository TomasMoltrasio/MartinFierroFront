import { useContext } from "react";
import CartContext from "context/CartContext";
import CartItem from "components/CartItem";
import { Grid } from "@nextui-org/react";

export default function CartContainer() {
  const { state, removeProduct, clearCart } = useContext(CartContext);
  const { cart } = state;

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start mt-8 bg-slate-300">
      <div className="w-full h-1/3 flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold mb-4">Carrito</h1>
        <Grid.Container gap={2}>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-1/4 h-full flex flex-col items-start justify-center border-2 border-black rounded-lg">
              {cart.map((product) => (
                <Grid justify="start" xs={12} key={product.id}>
                  <CartItem product={product} />
                </Grid>
              ))}
            </div>
          </div>
        </Grid.Container>
      </div>
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <button
          className="w-1/3 h-10 rounded-md mb-4 border-2 border-gray-300"
          onClick={handleClearCart}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}
