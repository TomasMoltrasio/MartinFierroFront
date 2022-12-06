import { updateProduct } from "services/products";
import { useState } from "react";

export default function ProductDashboard({ product }) {
  const [price, setPrice] = useState(product.price);

  const confirmPrice = async (e) => {
    e.preventDefault();
    await updateProduct(product._id, { price });
  };

  return (
    <li className="flex flex-row justify-between">
      <p
        className="
            text-gray-800
            text-lg
            font-semibold
            mr-4
            w-1/2
            leading-loose
            "
      >
        {product.name}
      </p>
      <input
        className="
            text-gray-800
            text-lg
            font-semibold
            mr-4
            w-1/2
            
      "
        type="number"
        defaultValue={product.price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        className="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            "
        onClick={(e) => confirmPrice(e)}
      >
        Update
      </button>
    </li>
  );
}
