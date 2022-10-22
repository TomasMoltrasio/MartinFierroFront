import { useContext } from "react";
import CartContext from "context/CartContext";
import { Image, Col, Row } from "@nextui-org/react";

export default function CartItem({ product }) {
  const { removeProduct } = useContext(CartContext);

  const handleRemoveProduct = (product) => {
    removeProduct(product);
  };

  return (
    <div className="flex flex-row items-center w-full h-full">
      <Row justify="center" fluid align="center">
        <Col justify="center">
          <Image
            src={product.image}
            height="80px"
            width="80px"
            objectFit="cover"
            alt="Card example background"
          />
        </Col>
        <Col justify="center">
          <h3
            className="
        text-lg font-semibold ml-4
      "
          >{`${product.quantity}x ${product.name}`}</h3>
        </Col>
        <Col justify="center">
          <h3
            className="
        text-lg font-semibold ml-4
      "
          >{`$${product.price * product.quantity}`}</h3>
        </Col>
        <Col justify="center">
          <button
            onClick={() => handleRemoveProduct(product)}
            className="
        text-sm font-semibold ml-4 text-red-500
      "
          >
            Quitar
          </button>
        </Col>
      </Row>
    </div>
  );
}
