import { Card, Text, Row, Button, Col, Image, Modal } from "@nextui-org/react";
import { useState, useContext } from "react";
import ProductToCart from "./ProductToCart";
import UserContext from "context/UserContext";
import dynamic from "next/dynamic";

export default function CardMenu({ product, nameId }) {
  const [showModal, setShowModal] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const { user } = useContext(UserContext);

  const CreateProduct = dynamic(() => import("./CreateProduct"), {
    ssr: false,
  });

  const handleShowModal = () => {
    setShowModal(false);
  };

  const handleShowModalCreate = () => {
    setShowModalCreate(false);
  };

  return (
    <Card
      isPressable
      isHoverable
      draggable={false}
      className={`shadow-lg shadow-slate-600 border-2 border-slate-600 cursor-pointer hover:shadow-slate-700 hover:border-slate-700  `}
      css={{ w: "100%", h: "300px" }}
      onPress={() => {
        user && user.token !== null
          ? setShowModalCreate(true)
          : setShowModal(true);
      }}
    >
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Row justify="flex-end">
          <Button
            aria-label="Agregar al carrito"
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
          height="300px"
          objectFit="cover"
          alt="Product Image"
          loading="lazy"
        />
      </Card.Body>
      <Card.Footer
        className="border-t-2 border-slate-800
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
            text-slate-900
            tracking-wide
            "
            >
              {`$${product.price}`}
            </Text>
          </Col>
        </Row>
      </Card.Footer>
      <Modal open={showModal} onClose={handleShowModal} closeButton blur>
        <ProductToCart product={product} handleShowModal={handleShowModal} />
      </Modal>
      <Modal
        open={showModalCreate}
        onClose={handleShowModalCreate}
        closeButton
        blur
        width="100%"
        height="100%"
      >
        <CreateProduct
          product={product}
          handleShowModal={handleShowModalCreate}
          edit={true}
        />
      </Modal>
    </Card>
  );
}
