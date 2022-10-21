import { useContext } from "react";
import CartContext from "context/CartContext";
import { Image } from "@nextui-org/react";

export default function CartItem({ product }) {
  const { removeProduct } = useContext(CartContext);

  const handleRemoveProduct = (product) => {
    removeProduct(product);
  };

  return (
    <tr>
      <td>
        <Image src={product.image} alt={product.name} width={50} height={50} />
      </td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>{product.price * product.quantity}</td>
      <td>
        <button onClick={() => handleRemoveProduct(product)}>Remove</button>
      </td>
    </tr>
  );
}
