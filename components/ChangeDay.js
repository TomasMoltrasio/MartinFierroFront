import { useEffect, useState } from "react";
import { getProductsByCategory, changeActiveDay } from "services/products";
import Swal from "sweetalert2";
import validated from "services/validate";

export default function ChangeDay({ handleShowModalDay }) {
  const [products, setProducts] = useState([]);
  const secret = process.env.MY_SECRET_TOKEN;

  useEffect(() => {
    const getProducts = async () => {
      const response = await getProductsByCategory("Dia");
      setProducts(response);
    };
    getProducts();
  }, []);

  const selectDay = async (e) => {
    await changeActiveDay(e.target.value).finally(async () => {
      handleShowModalDay();
      Swal.fire({
        icon: "success",
        title: "¡El plato del día ha sido cambiado!",
        showConfirmButton: true,
      });
      await validated("/").finally(() => {
        Swal.fire({
          icon: "success",
          title: "¡El plato del día ha sido cambiado!",
          showConfirmButton: true,
        }).then(() => {
          window.location.reload();
        });
      });
    });
  };

  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        w-full
        h-full
        "
    >
      <h1 className="text-2xl font-bold">Elegir plato del dia</h1>
      <div className="flex flex-col items-center justify-center w-full h-full mt-4 bg-slate-200">
        {products.map((product) => (
          <div
            className="
            flex
            flex-row
            items-center
            justify-between
            w-full
            h-max
            border-b-2
            border-slate-300
            px-4
            "
            key={`plato-del-dia-${product._id}`}
          >
            <p>{product.name}</p>
            <button
              className="bg-slate-400 text-white px-4 rounded"
              value={product._id}
              onClick={(e) => selectDay(e)}
            >
              Seleccionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
