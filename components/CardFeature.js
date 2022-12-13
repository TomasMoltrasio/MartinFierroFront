import NextLink from "next/link";
import { Text, Card } from "@nextui-org/react";
import Head from "next/head";

export default function Menu({ feature }) {
  return (
    <>
      <Head>
        <title>{feature.title}</title>
      </Head>
      <NextLink href={feature.link}>
        <div className="group cursor-pointer animate__animated animate__jackInTheBox w-full my-2 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2">
          <Card
            isPressable
            isHoverable
            css={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
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
              group-hover:scale-125
              transition duration-500 ease-in-out
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
              className="rounded-md group-hover:scale-125 transition duration-500 ease-in-out"
            />
          </Card>
        </div>
      </NextLink>
    </>
  );
}
