import NextLink from "next/link";
import { useState } from "react";
import { Text, Card, Modal } from "@nextui-org/react";
import Head from "next/head";

export default function Menu({ feature }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Head>
        <title>{feature.title}</title>
      </Head>
      <NextLink href={feature.link}>
        <div className="cursor-pointer w-full">
          <Card
            isPressable
            css={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Card.Header
              css={{
                position: "absolute",
                zIndex: 1,
                padding: "1rem",
                color: "white",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
              }}
              className="flex flex-col justify-center items-center"
            >
              <Text
                className="
              text-white
              font-bold
              text-4xl
              "
                h2
              >
                {feature.title}
              </Text>
            </Card.Header>

            <Card.Image
              src={feature.image}
              alt={feature.title}
              width="100%"
              height={300}
              objectFit="cover"
              className="rounded-md"
            />
          </Card>
        </div>
      </NextLink>
    </>
  );
}
