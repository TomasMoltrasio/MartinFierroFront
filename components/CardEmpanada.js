import React from "react";
import { useContext, useState } from "react";
import CartContext from "context/CartContext";
import { Image, Button, Text } from "@nextui-org/react";
import { BsCartPlus } from "react-icons/bs";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

export default function CardEmpanada({ product }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(0);
  const [of, setOf] = useState("fritas");
  // const [date, setDate] = useState(new Date());
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
    const newProduct = {
      ...product,
      garnish: taste,
      price: total,
      of: of,
    };
    addProduct(newProduct, 1);
    Swal.fire({
      title: "Producto agregado al carrito",
      icon: "success",
      showConfirmButton: true,
      zIndex: 9990,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Continuar comprando",
      cancelButtonText: "Ir al carrito",
      showCancelButton: true,
      cancelButtonColor: "#86C214",
    }).then((result) => {
      if (result.isConfirmed) {
        setTaste({
          carne: 0,
          pollo: 0,
          jamonyqueso: 0,
          cebolla: 0,
          verdura: 0,
          humita: 0,
        });
        setQuantity(0);
        setOf("fritas");
      } else {
        router.push("/cart");
      }
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
    <div className="w-full h-full flex flex-col items-center justify-between">
      <div className="w-full md:w-3/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 3xl:w-3/12 h-fit flex flex-col rounded-t-2xl items-center border-2 border-black justify-center">
        <Image
          src={`../${product.image}`}
          alt={product.name}
          className="w-full h-64 rounded-t-2xl"
          objectFit="cover"
        />
      </div>
      <div className="w-full md:w-3/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 3xl:w-3/12 h-fit flex flex-col items-center justify-between border-x-2 border-black ">
        <Text h3 className="text-black font-semibold text-center">
          Empanadas fritas
        </Text>
      </div>
      <div className="w-full md:w-3/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 3xl:w-3/12 border-2 pt-2 border-black rounded-bl-md rounded-br-md h-max flex flex-col items-center justify-between gap-0">
        {optionTaste.map((opTaste) => (
          <div
            key={`iption-taste-${opTaste.value}`}
            className="w-full h-max flex flex-row items-center justify-between text-sm"
          >
            <div
              className="
            w-3/4 h-max flex flex-row items-center justify-start text-sm"
            >
              <p className="text-black font-semibold ml-4 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8">
                {opTaste.name}
              </p>
            </div>
            <div className="w-1/4 h-full flex flex-row items-center justify-end mr-4 md:mr-8 lg:mr-8 xl:mr-8 2xl:mr-8">
              <Button.Group
                size="xs"
                color={taste[opTaste.value] === 0 ? "#000" : "success"}
                rounded
              >
                <Button
                  aria-label="Restar"
                  bordered
                  auto={true}
                  onClick={handleAddTaste}
                  name={opTaste.value}
                  value={-1}
                  disabled={taste[opTaste.value] === 0}
                  className="disabled:hidden"
                >
                  -
                </Button>
                <Button
                  aria-label="Cantidad"
                  bordered
                  auto={true}
                  disabled={taste[opTaste.value] === 0}
                  className="disabled:hidden text-black font-semibold text-base"
                >
                  {taste[opTaste.value]}
                </Button>
                <Button
                  aria-label="Sumar"
                  bordered
                  auto={true}
                  onClick={handleAddTaste}
                  name={opTaste.value}
                  value={1}
                >
                  +
                </Button>
              </Button.Group>
            </div>
          </div>
        ))}
        <div className="w-full h-max flex flex-row items-center justify-between">
          <h3 className="font-normal ml-4 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8">
            Cantidad total
          </h3>
          <h3 className="font-semibold mr-16 md:mr-20 lg:mr-20 xl:mr-20 2xl:mr-20">
            {quantity}
          </h3>
        </div>
        {/* <div className="w-full h-max flex flex-row items-center justify-center px-4">
          <Radio.Group
            aria-label="of"
            value={of}
            onChange={setOf}
            color="success"
            orientation="horizontal"
            defaultValue="fritas"
            size="sm"
            label="Selecciona una opción"
          >
            <Radio value="fritas">Fritas</Radio>
            <Tooltip
              content={
                date.getDay() === 0 ||
                date.getDay() === 6 ||
                date.getDay() === 5
                  ? "No disponible los fines de semana"
                  : ""
              }
            >
              <Radio
                isDisabled={
                  date.getDay() === 0 ||
                  date.getDay() === 6 ||
                  date.getDay() === 5
                }
                value="al horno"
              >
                Horno
              </Radio>
            </Tooltip>
          </Radio.Group>
        </div> */}
        <p></p>
        <div className="w-full h-max flex flex-col items-center justify-center">
          <button
            aria-label="Agregar al carrito"
            className="w-11/12 h-max flex flex-row items-center justify-center
          bg-green-500 hover:bg-green-700 hover:scale-105 text-white font-bold py-2 px-4 mt-4 mb-2 rounded disabled:bg-red-500"
            onClick={handleAddProduct}
            disabled={quantity === 0}
          >
            {`Agregar al carrito $${getTotal()}`}
            <BsCartPlus className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
