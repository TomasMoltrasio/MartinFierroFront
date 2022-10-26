import React from "react";
import { useContext, useState } from "react";
import CartContext from "context/CartContext";
import { Image, Button } from "@nextui-org/react";
import { BsCartPlus } from "react-icons/bs";
import Swal from "sweetalert2";

export default function CardEmpanada({ product, handleShowModal }) {
  const [quantity, setQuantity] = useState(0);
  const optionTaste = [
    { name: "Carne", value: "carne" },
    { name: "Pollo", value: "pollo" },
    { name: "Jamon y Queso", value: "jamonyqueso" },
    { name: "Cebolla y Queso", value: "cebolla" },
    { name: "Verdura", value: "verdura" },
    { name: "Humita", value: "humita" },
  ];
  const [taste, setTaste] = useState({
    carne: 0,
    pollo: 0,
    jamonyqueso: 0,
    cebolla: 0,
    verdura: 0,
    humita: 0,
  });
  const { addProduct } = useContext(CartContext);

  const handleAddProduct = () => {
    let total = getTotal();
    handleShowModal();
    const newProduct = {
      ...product,
      garnish: taste,
      price: total,
    };
    addProduct(newProduct, 1);
    Swal.fire({
      title: "Producto agregado al carrito",
      icon: "success",
      showConfirmButton: true,
      zIndex: 9990,
      confirmButtonColor: "#3085d6",
    });
  };

  const handleAddTaste = (e) => {
    let { name, value } = e.target;
    const sum = taste[name] + parseInt(value);
    setTaste({ ...taste, [name]: sum });
    setQuantity((prev) => prev + parseInt(value));
  };

  const getTotal = () => {
    let docenas = Math.floor(quantity / 12);
    let unidades = quantity % 12;
    let priceDocena = product.price * 12 - 100;
    let priceUnidad = product.price;
    let total = docenas * priceDocena + unidades * priceUnidad;
    return total;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <Image src={product.image} height="30%" />
        <p className="text-lg mt-4 mb-4">{product.description}</p>
      </div>
      <div className="w-full h-1/2 flex flex-col items-center justify-center">
        <div className="w-11/12 h-1/2 rounded-md border-2 border-gray-300">
          {optionTaste.map((opTaste) => (
            <>
              <div
                key={`iption-taste-${opTaste.value}`}
                className="
                w-full h-max flex flex-row items-center justify-between gap-2 text-sm
            "
              >
                <div>
                  <p className="text-black font-semibold ml-4">
                    {opTaste.name}
                  </p>
                </div>
                <div className="w-1/2 h-full flex flex-row items-center justify-end gap-4 mr-4">
                  <Button.Group
                    size="xs"
                    color={taste[opTaste.value] === 0 ? "#000" : "success"}
                    rounded
                  >
                    <Button
                      bordered
                      auto
                      onClick={handleAddTaste}
                      name={opTaste.value}
                      value={-1}
                      disabled={taste[opTaste.value] === 0}
                      className="disabled:hidden"
                    >
                      -
                    </Button>
                    <Button
                      bordered
                      auto
                      className="disabled:block text-black font-normal text-base"
                    >
                      {taste[opTaste.value]}
                    </Button>
                    <Button
                      bordered
                      auto
                      onClick={handleAddTaste}
                      name={opTaste.value}
                      value={1}
                    >
                      +
                    </Button>
                  </Button.Group>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="w-11/12 h-1/4 flex flex-row items-center justify-between">
        <h3 className="font-semibold ml-4">Cantidad de empanadas</h3>
        <h3 className="font-semibold mr-16">{quantity}</h3>
      </div>
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <button
          auto
          className="w-2/3 h-1/2 flex flex-row items-center justify-center
          bg-green-500 hover:bg-green-700 hover:scale-105 text-white font-bold py-2 px-4 mt-2 mb-2 rounded disabled:bg-red-500"
          onClick={handleAddProduct}
        >
          {`Agregar al carrito $${getTotal()}`}
          <BsCartPlus className="ml-2" />
        </button>
      </div>
    </div>
  );
}
