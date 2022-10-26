import { useContext } from "react";
import CartContext from "context/CartContext";
import { Image, Col, Row } from "@nextui-org/react";

export default function CartItem({ product }) {
  const { removeProduct } = useContext(CartContext);

  const handleRemoveProduct = (product) => {
    removeProduct(product);
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
    <div className="flex flex-row items-center w-full h-full">
      <div className="flex flex-col items-center justify-center w-max h-full">
        <Image
          src={product.image}
          alt={product.name}
          objectFit="cover"
          width={100}
          height={100}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col items-start pl-2 justify-center w-full h-full">
        <p className="text-left text-gray-800 text-base">{`${showQuantity()}x ${
          product.name
        }`}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-2/6 h-full">
        <p className="text-center text-gray-800 text-base font-semibold">
          {`$${product.price * showQuantity()}`}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-max h-full pr-2">
        <button
          className="w-full h-10 font-semibold text-base text-red-500 disabled:hidden hover:scale-110"
          onClick={() => handleRemoveProduct(product)}
        >
          Quitar
        </button>
      </div>
    </div>
  );
}
