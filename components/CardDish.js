import { Card, Col, Row, Button, Text, Modal } from "@nextui-org/react";
import { useState } from "react";
import ProductToCart from "./ProductToCart";
import Image from "next/image";

export default function CardDish({ product }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(false);
  };

  return (
    <Card
      isPressable
      isHoverable
      className="relative shadow-lg animate__animated animate__bounceInUp  shadow-slate-600 cursor-pointer hover:shadow-slate-700 border-slate-700 border-2 rounded-2xl"
      onPress={() => setShowModal(true)}
      css={{
        w: "100%",
        h: "300px",
        "@md": { w: "30%", h: "300px" },
        "@lg": { w: "30%", h: "300px" },
        "@xl": { w: "30%", h: "300px" },
        "@2xl": { w: "30%", h: "300px" },
        "@3xl": { w: "30%", h: "300px" },
        "@4xl": { w: "30%", h: "300px" },
      }}
    >
      <Modal open={showModal} onClose={handleShowModal} closeButton blur>
        <ProductToCart product={product} handleShowModal={handleShowModal} />
      </Modal>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Row justify="flex-end">
          <Button
            aria-label="Agregar al carrito"
            className="hover:scale-125"
            auto={true}
            onClick={() => setShowModal(true)}
          >
            <Image src="/AddCart.svg" alt="AddCart" width={40} height={40} />
          </Button>
        </Row>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={product.image}
          width="100%"
          height="300px"
          objectFit="cover"
          alt="Imagen de plato del dia"
          showSkeleton={true}
        />
      </Card.Body>
      <Card.Footer
        css={{
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
        className=" border-t-2 border-slate-800
        bg-white
         md:p-4 lg:p-4 xl:p-4 2xl:p-4 3xl:p-4 4xl:p-4"
      >
        <Row>
          <Col className="w-3/4">
            <Text
              h3
              weight="medium"
              transform="uppercase"
              color="#000"
              className="
                text-lg
                md:text-lg
                lg:text-lg
                xl:text-lg
                2xl:text-lg
                3xl:text-lg
                4xl:text-lg
              "
            >
              {product.name}
            </Text>
          </Col>
          <Col className="w-1/4">
            <Text
              h3
              transform="uppercase"
              className="
                text-lg
                md:text-xl
                lg:text-xl
                xl:text-xl
                2xl:text-xl
                3xl:text-xl
                4xl:text-xl
            text-end
            font-medium
            text-slate-800
            tracking-wide
            "
            >
              {`$${product.price}`}
            </Text>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
