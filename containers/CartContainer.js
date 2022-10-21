import { useContext } from "react";
import CartContext from "context/CartContext";
import CartItem from "components/CartItem";
import { Container, Col, Row } from "@nextui-org/react";

export default function CartContainer() {
  const { state, removeProduct, clearCart } = useContext(CartContext);
  const { cart } = state;

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div
      className="
      flex
      flex-col
      items-start
      justify-start
      w-full
      h-screen
      "
    >
      <Container
        className="
      flex
      flex-col
      justify-center
      items-center
      w-full
      h-full
      p-4
      "
      >
        <Row justify="center">
          <Col>
            <h1>Carrito</h1>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <table>
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <button onClick={handleClearCart}>Vaciar carrito</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
