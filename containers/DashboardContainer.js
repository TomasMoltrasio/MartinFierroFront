import { useRouter } from "next/router";
import { FiRefreshCcw } from "react-icons/fi";
import validated from "services/validate";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import dynamic from "next/dynamic";

export default function DashboardContainer({ products }) {
  const router = useRouter();
  const cookies = new Cookies();
  const user = cookies.get("user");

  const ProductDashboard = dynamic(
    () => import("components/ProductDashboard"),
    {
      ssr: true,
    }
  );

  useEffect(() => {
    if (!user?.token) router.push("/login");
  }, [user]);

  const revalidate = async () => {
    await validated("/api/products");
  };

  return (
    <>
      {user?.token ? (
        <div className="flex flex-col w-full justify-center items-center">
          <h1
            className="
        text-2xl
        font-bold
        text-gray-800
        mb-4
      "
          >
            Dashboard{" "}
            <button
              aria-label="Refresh"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={revalidate}
            >
              <FiRefreshCcw />
            </button>
          </h1>
          <ul>
            {products.map((product) => (
              <ProductDashboard product={product} key={product._id} />
            ))}
          </ul>
        </div>
      ) : (
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          No tienes permisos para ver esta página
        </h1>
      )}
    </>
  );
}
