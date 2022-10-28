import { createProduct } from "services/products";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import Swal from "sweetalert2";
import validated from "services/validate";

export default function CreateProduct({ handleShowModal }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
    garnish: null,
    of: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price, description, image, category, garnish, of } = product;
    const garnishArray = garnish === null ? null : garnish.split(",");
    const ofArray = of === null ? null : of.split(",");
    const newProduct = {
      name,
      price,
      description,
      image,
      category,
      garnish: garnishArray,
      of: ofArray,
    };
    const response = await createProduct(newProduct);
    handleShowModal();
    if (response) {
      await validated("/menu").finally(() => {
        Swal.fire({
          title: "Producto creado",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          window.location.reload();
        });
      });
    } else {
      Swal.fire(
        "Error",
        "Hubo un error cuando se quizo crear el producto",
        "error"
      );
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Crear producto</h1>
      <form
        className="
        flex
        flex-col
        items-center
        justify-center
        w-full
        h-full
        mt-4
        bg-slate-200
        border-2
        border-black
        rounded-lg
        gap-4
        p-4
    "
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          placeholder="Nombre"
          type="text"
          value={product.name}
          bordered
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          required
        />
        <Input
          placeholder="Precio"
          bordered
          type="number"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          required
        />
        <Input
          placeholder="Descripcion"
          bordered
          type="text"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          required
        />
        <Input
          bordered
          placeholder="Imagen"
          type="text"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          required
        />
        <Input
          bordered
          placeholder="Categoria"
          type="text"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          required
        />
        <Input
          bordered
          placeholder="Guarnicion"
          type="text"
          value={product.garnish}
          onChange={(e) =>
            setProduct({
              ...product,
              garnish: e.target.value,
            })
          }
        />
        <Input
          bordered
          placeholder="Of"
          type="text"
          value={product.of}
          onChange={(e) => setProduct({ ...product, of: e.target.value })}
        />
        <button
          className="
          w-full

          sm:w-3/12
          xl:w-3/12
          lg:w-3/12
          md:w-3/12
          2xl:w-3/12
        h-10
        bg-lime-500
        text-white
        rounded-lg
        font-bold
        hover:bg-slate-600
        transition
        duration-200
        ease-in-out
        "
          type="submit"
        >
          Crear producto
        </button>
      </form>
    </>
  );
}
