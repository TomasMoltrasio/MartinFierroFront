import Link from "next/link";
import { Card, Row, Text } from "@nextui-org/react";

export default function Category({ name, image, link }) {
  return (
    <Link href={link}>
      <Card isPressable className="hover:scale-105">
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={image}
            objectFit="cover"
            width="100%"
            height={80}
            alt={name}
          />
        </Card.Body>
        <Card.Footer
          css={{
            justifyItems: "flex-start",
            height: "max-content",
            padding: "5px",
          }}
        >
          <Row wrap="wrap" justify="space-between" align="center">
            <Text className="ml-2" b>
              {name}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Link>
  );
}
