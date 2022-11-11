import { useContext } from "react";
import CartContext from "context/CartContext";
import { Image, Col, Row } from "@nextui-org/react";
import { BsDashLg, BsTrash } from "react-icons/bs";

export default function CartItem({ product }) {
  const { removeProduct } = useContext(CartContext);

  const handleRemoveProduct = (product) => {
    removeProduct(product);
  };

  const getTotal = () => {
    if (product.category === "Empanadas") {
      let docenas = Math.floor(product.quantity / 12);
      let unidades = product.quantity % 12;
      let priceDocena = product.price * 12 - 100;
      let priceUnidad = product.price;
      let total = docenas * priceDocena + unidades * priceUnidad;
      return total;
    } else {
      return product.price * product.quantity;
    }
  };

  const showQuantity = () => {
    let quantity = 0;
    if (product.category === "Empanadas") {
      Object.keys(product.garnish).map((key) => {
        quantity += product.garnish[key];
      });
    } else {
      quantity = product.quantity;
    }
    return quantity;
  };

  return (
    <div className="flex flex-row items-center w-full h-full my-1">
      <div className="flex flex-col items-center justify-center w-max h-full">
        <Image
          src={product.image}
          alt={product.name}
          objectFit="cover"
          width={100}
          height={100}
          className="rounded-md ml-1"
        />
      </div>
      <div className="flex flex-col items-start pl-2 justify-center w-full h-full">
        <p className="text-left text-gray-800 text-base">{`${showQuantity()}x ${
          product.name
        }`}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-2/6 h-full">
        <p className="text-center text-gray-800 text-base font-semibold">
          {`$${getTotal()}`}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-max h-full pr-2">
        <button
          className="w-full h-10 font-semibold text-base text-red-500 disabled:hidden hover:scale-110"
          onClick={() => handleRemoveProduct(product)}
        >
          {product.quantity > 1 ? (
            <BsDashLg className="text-xl ml-2" />
          ) : (
            <BsTrash className="text-xl ml-2" />
          )}
        </button>
      </div>
    </div>
  );
}
