import React from "react";
import { useContext, useState } from "react";
import CartContext from "context/CartContext";
import { Image, Collapse, Checkbox } from "@nextui-org/react";
import { BsPatchMinus, BsPatchPlus, BsCartPlus } from "react-icons/bs";
import Swal from "sweetalert2";

export default function ProductToCart({ product, handleShowModal }) {
  const [quantity, setQuantity] = useState(1);
  const [of, setOf] = useState("");
  const [garnish, setGarnish] = useState("");
  const [garnishAdd, setGarnishAdd] = useState([]);
  const [garnishPrice, setGarnishPrice] = useState(0);
  const { addProduct } = useContext(CartContext);

  const handleAddProduct = () => {
    handleShowModal();
    const newProduct = {
      ...product,
      garnish: garnish + " " + garnishAdd.join(", "),
      of: of,
      price: product.price + garnishPrice,
    };
    addProduct(newProduct, quantity);
    Swal.fire({
      title: "Producto agregado al carrito",
      icon: "success",
      showConfirmButton: true,
      zIndex: 9990,
      confirmButtonColor: "#3085d6",
    });
  };

  const handleAddGarnish = (e) => {
    setGarnish(e.target.value);
    if (e.target.value === "nada") {
      setGarnishPrice(-100);
      setGarnishAdd([]);
    } else if (e.target.value === "parisienne") {
      setGarnishPrice(100);
      setGarnishAdd([]);
    } else {
      setGarnishPrice(0);
    }
  };

  const handleAddOf = (e) => {
    setOf(e.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <Image src={`../${product.image}`} height="30%" />
        <p className="text-lg mt-4 mb-4">{product.description}</p>
      </div>
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        {product.of && product.of.length > 0 ? (
          <select
            onChange={handleAddOf}
            className="w-11/12 h-10 rounded-md mb-4 border-2 border-gray-300 px-2"
          >
            <option value="">Elegir una opción</option>
            {product.of.map((of, index) => (
              <option key={`of-option-${index}`} value={of}>
                {of.charAt(0).toUpperCase() + of.slice(1)}
              </option>
            ))}
          </select>
        ) : null}
        {product.garnish && product.garnish.length > 0 ? (
          <select
            onChange={handleAddGarnish}
            className="w-11/12 h-10 rounded-md mb-4 border-2 border-gray-300 px-2"
          >
            <option value="">
              {product.category === "Pastas"
                ? "Elegir una salsa"
                : "Elegir una guarnición"}
            </option>
            {product.garnish.map((garnish, index) => (
              <option key={`garnish-option-${index}`} value={garnish}>
                {garnish.charAt(0).toUpperCase() + garnish.slice(1)}
              </option>
            ))}
            <option value="nada">
              {product.category !== "Pastas" ? "Sin guarnición" : "Sin salsa"}
            </option>
          </select>
        ) : null}
      </div>
      {garnish === "papas" || product.name === "Papas fritas" ? (
        <div className="w-full h-1/3 flex flex-col items-center justify-center">
          <Collapse
            title="¿Queres agregar algo a tus papas?"
            className="text-sm w-11/12 h-max pl-2"
          >
            <Checkbox.Group
              size="xs"
              value={garnishAdd}
              onChange={(e) => {
                setGarnishAdd(e);
                setGarnishPrice(e.length * 200);
              }}
            >
              <Checkbox value="cheddar">Cheddar</Checkbox>
              <Checkbox value="panceta">Panceta</Checkbox>
              <Checkbox value="verdeo">Verdeo</Checkbox>
              <Checkbox value="roquefort">Roquefort</Checkbox>
              <Checkbox value="chorizo">Chorizo</Checkbox>
              <Checkbox value="huevo">Huevos fritos</Checkbox>
            </Checkbox.Group>
          </Collapse>
        </div>
      ) : null}
      {garnish === "ensalada" || product.name === "Ensalada" ? (
        <div className="w-full h-1/3 flex flex-col items-center justify-center">
          <Collapse
            title="¿Como queres armar tu ensalada?"
            className="text-sm w-11/12 h-max pl-2"
          >
            <Checkbox.Group
              size="xs"
              value={garnishAdd}
              onChange={(e) => {
                setGarnishAdd(e);
              }}
            >
              <Checkbox value="lechuga">Lechuga</Checkbox>
              <Checkbox value="tomate">Tomate</Checkbox>
              <Checkbox value="remolacha">Remolacha</Checkbox>
              <Checkbox value="huevo">Huevo</Checkbox>
              <Checkbox value="cebolla">Cebolla</Checkbox>
              <Checkbox value="zanahoria">Zanahoria</Checkbox>
            </Checkbox.Group>
          </Collapse>
        </div>
      ) : null}

      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-row items-center justify-center">
          <div className="w-1/3 h-full flex flex-col items-center justify-center">
            <p className="text-lg">Precio:</p>
            <p className="text-lg font-bold">
              ${product.price * quantity + garnishPrice * quantity}
            </p>
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
          className="w-11/12 h-1/2 flex flex-row items-center justify-center
          bg-green-500 hover:bg-green-700 hover:scale-105 text-white font-bold py-2 px-4 mt-2 mb-2 rounded disabled:bg-red-500"
          onClick={handleAddProduct}
          disabled={
            (garnish === "" && product.garnish) ||
            (product.category === "Meganesas" && of === "") ||
            (garnish === "ensalada" && garnishAdd.length === 0) ||
            (product.name === "Ensalada" && garnishAdd.length === 0)
          }
        >
          Agregar al carrito
          <BsCartPlus className="ml-2" />
        </button>
      </div>
    </div>
  );
}
