import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { FaCartPlus } from "react-icons/fa";

export default function CardDish() {
  return (
    <Card
      css={{
        w: "80%",
        h: "300px",
        "@md": { w: "30%", h: "300px" },
        "@lg": { w: "30%", h: "300px" },
        "@xl": { w: "30%", h: "300px" },
        "@2xl": { w: "30%", h: "300px" },
        "@3xl": { w: "30%", h: "300px" },
        "@4xl": { w: "30%", h: "300px" },
      }}
    >
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text
            h3
            transform="uppercase"
            className="
            text-center
            text-2xl
            font-extrabold
            text-white
            "
          >
            Filet de pejerrey
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCooDaYS1n9zNTqqI7CvjH93w84ms1p3fDpfY3rAvlNQzpMVMTkEu-BPMn94DNmH36bk&usqp=CAU"
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
          className="contrast-50"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text
              size={24}
              weight="semibold"
              transform="uppercase"
              color="#000"
            >
              $1400
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded className="text-black">
                <FaCartPlus size={24} />
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
