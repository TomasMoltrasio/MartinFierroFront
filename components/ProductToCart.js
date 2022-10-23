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
        {product.category === "Meganesas" ? (
          <select
            onChange={(e) => handleAddOf(e)}
            className="w-11/12 h-10 rounded-md mb-4 border-2 border-gray-300"
          >
            <option value="">Elegir una opción</option>
            <option value="carne">Carne</option>
            <option value="pollo">Pollo</option>
          </select>
        ) : null}
        <select
          onChange={(e) => handleAddGarnish(e)}
          className="w-11/12 h-10 rounded-md mb-4 border-2 border-gray-300"
        >
          <option value="">Elegir guarnición</option>
          <option value="papas">Papas fritas</option>
          <option value="ensalada">Ensalada</option>
          <option value="nada">Sin Guarnicion</option>
        </select>
      </div>
      {garnish === "papas" ? (
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
      {garnish === "ensalada" ? (
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
          auto
          className="w-1/2 h-1/2 flex flex-row items-center justify-center
          bg-green-500 hover:bg-green-700 hover:scale-105 text-white font-bold py-2 px-4 mt-2 mb-2 rounded disabled:bg-red-500"
          onClick={handleAddProduct}
          disabled={
            garnish === "" ||
            (product.category === "Meganesas" && of === "") ||
            (garnish === "ensalada" && garnishAdd.length === 0)
          }
        >
          Agregar al carrito
          <BsCartPlus className="ml-2" />
        </button>
      </div>
    </div>
  );
}
