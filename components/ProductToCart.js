import React from "react";
import { useContext, useState } from "react";
import CartContext from "context/CartContext";
import { Image } from "@nextui-org/react";
import { BsPatchMinus, BsPatchPlus, BsCartPlus } from "react-icons/bs";
import Swal from "sweetalert2";

export default function ProductToCart({ product, handleShowModal }) {
  const [quantity, setQuantity] = useState(1);
  const { addProduct } = useContext(CartContext);

  const handleAddProduct = () => {
    handleShowModal();
    addProduct(product, quantity);
    Swal.fire({
      title: "Producto agregado al carrito",
      icon: "success",
      showConfirmButton: true,
      zIndex: 9999,
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <Image src={product.image} />
        <p className="text-lg mt-4 mb-4">{product.description}</p>
      </div>

      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-row items-center justify-center">
          <div className="w-1/3 h-full flex flex-col items-center justify-center">
            <p className="text-lg">Precio:</p>
            <p className="text-lg font-bold">${product.price}</p>
          </div>
          <div className="w-1/3 h-full flex flex-col items-center justify-center">
            <p className="text-lg">Cantidad:</p>
            <div className="w-full h-full flex flex-row items-center justify-center">
              <button
                className="w-1/3 h-full flex flex-col items-center justify-center"
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                <BsPatchMinus />
              </button>
              <p className="w-1/3 h-full flex flex-col items-center justify-center">
                {quantity}
              </p>
              <button
                className="w-1/3 h-full flex flex-col items-center justify-center"
                onClick={() => setQuantity(quantity + 1)}
              >
                <BsPatchPlus />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <button
          auto
          className="w-1/2 h-1/2 flex flex-row items-center justify-center
          bg-green-500 hover:bg-green-700 hover:scale-105 text-white font-bold py-2 px-4 mt-2 mb-2 rounded"
          onClick={handleAddProduct}
        >
          Agregar al carrito
          <BsCartPlus className="ml-2" />
        </button>
      </div>
    </div>
  );
}
