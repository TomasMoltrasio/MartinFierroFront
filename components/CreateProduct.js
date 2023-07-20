import { createProduct, updateProduct } from "services/products";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import Swal from "sweetalert2";
import validated from "services/validate";

export default function CreateProduct({
  product,
  handleShowModal,
  edit = false,
}) {
  if (!product) {
    product = {
      name: "",
      description: "",
      price: "",
      image: "",
    };
  }

  const [newProduct, setNewProduct] = useState(product);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price, description, image, category, garnish, of } =
      newProduct;

    const savedProduct = {
      name,
      price,
      description,
      image,
      category,
      garnish,
      of,
    };

    if (edit) {
      const response = await updateProduct(product._id, savedProduct);
      handleShowModal();
      if (response) {
        await validated("menu").finally(() => {
          Swal.fire({
            title: "Producto actualizado",
            icon: "success",
            showConfirmButton: true,
            zIndex: 9990,
            confirmButtonColor: "#3085d6",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        });
      } else {
        Swal.fire({
          title: "Error al actualizar producto",
          icon: "error",
          showConfirmButton: true,
          zIndex: 9990,
          confirmButtonColor: "#3085d6",
        });
      }
    } else {
      const response = await createProduct(savedProduct);
      handleShowModal();
      if (response) {
        await validated("/menu").finally(() => {
          Swal.fire({
            title: "Producto creado con exito",
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
        p-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          placeholder="Nombre"
          aria-label="Nombre"
          type="text"
          value={product.name || ""}
          bordered
          onChange={(e) => setNewProduct({ ...product, name: e.target.value })}
          required
        />
        <Input
          placeholder="Precio"
          aria-label="Precio"
          bordered
          type="number"
          value={product.price || 0}
          onChange={(e) => setNewProduct({ ...product, price: e.target.value })}
          required
        />
        <Input
          placeholder="Descripcion"
          aria-label="Descripcion"
          bordered
          type="text"
          value={product.description || ""}
          onChange={(e) =>
            setNewProduct({ ...product, description: e.target.value })
          }
          required
        />
        <Input
          bordered
          aria-label="Imagen"
          placeholder="Imagen"
          type="text"
          value={product.image || ""}
          onChange={(e) => setNewProduct({ ...product, image: e.target.value })}
          required
        />
        <Input
          aria-label="Categoria"
          bordered
          placeholder="Categoria"
          type="text"
          value={product.category || ""}
          onChange={(e) =>
            setNewProduct({ ...product, category: e.target.value })
          }
          required
        />
        <Input
          bordered
          placeholder="Guarnicion"
          aria-label="Guarnicion"
          type="text"
          value={product.garnish || ""}
          onChange={(e) =>
            setNewProduct({
              ...product,
              garnish: e.target.value.split(","),
            })
          }
        />
        <Input
          bordered
          placeholder="Of"
          aria-label="Of"
          type="text"
          value={product.of || ""}
          onChange={(e) =>
            setNewProduct({ ...product, of: e.target.value.split(",") })
          }
        />
        <button
          className="
          flex
          items-center
          justify-center
          p-2
          w-1/2
          xl:w-2/12
          lg:w-2/12
          md:w-2/12
          2xl:w-2/12
        h-max
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
          aria-label="Crear producto"
        >
          {edit ? "Editar producto" : "Crear producto"}
        </button>
      </form>
    </>
  );
}
