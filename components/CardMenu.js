import { Card, Text, Row, Button, Col, Image, Modal } from "@nextui-org/react";
import { useState } from "react";
import ProductToCart from "./ProductToCart";

export default function CardMenu({ product, nameId }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(false);
  };

  return (
    <Card
      isPressable
      isHoverable
      className="shadow-lg shadow-slate-600 border-2 border-slate-600 cursor-pointer hover:shadow-slate-700 hover:border-slate-700 hover:scale-105"
      css={{ w: "100%", h: "300px" }}
      onPress={() => setShowModal(true)}
    >
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Row justify="flex-end">
          <Button
            className="hover:scale-125"
            onClick={() => setShowModal(true)}
            auto={true}
          >
            <Image src="/AddCart.svg" alt="AddCart" width={40} height={40} />
          </Button>
        </Row>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={nameId === "Menu" ? product.image : `../../${product.image}`}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        css={{
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
        className="border-t-2 border-slate-800
        bg-white
         md:p-4 lg:p-4 xl:p-4 2xl:p-4 3xl:p-4 4xl:p-4"
      >
        <Row>
          <Col className="w-3/4">
            <Text
              h3
              weight="semibold"
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
            font-semibold
            text-slate-900
            "
            >
              {`$${product.price}`}
            </Text>
          </Col>
        </Row>
      </Card.Footer>
      <Modal
        open={showModal}
        onClose={handleShowModal}
        closeButton
        blur
        width="400px"
        height="300px"
      >
        <ProductToCart product={product} handleShowModal={handleShowModal} />
      </Modal>
    </Card>
  );
}
