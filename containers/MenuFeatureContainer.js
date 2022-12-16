import { Grid } from "@nextui-org/react";
import CardFeature from "components/CardFeature";
import Head from "next/head";

export default function MenuFeatureContainer() {
  const feature = {
    1: {
      title: "Meganesas",
      image: "/features/mega-chyp.webp",
      link: "/menu/1",
    },
    2: {
      title: "Picadas",
      image: "/features/picada.webp",
      link: "/menu/2",
    },
    3: {
      title: "Empanadas",
      image: "/features/empanada-carne.webp",
      link: "/menu/3",
    },
    4: {
      title: "Minutas",
      image: "/features/bife.webp",
      link: "/menu/4",
    },
    5: {
      title: "Pastas",
      image: "/features/fideos.webp",
      link: "/menu/5",
    },
    6: {
      title: "Acompañamientos",
      image: "/features/papas.webp",
      link: "/menu/6",
    },
    7: {
      title: "Postres",
      image: "/features/flan.webp",
      link: "/menu/7",
    },
    8: {
      title: "Bebidas",
      image: "/features/coca-cola.webp",
      link: "/menu/8",
    },
  };

  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <div className="flex flex-col flex-wrap items-center justify-center w-full h-max">
        <Grid.Container
          justify="start"
          css={{
            height: "100%",
          }}
        >
          {Object.keys(feature).map((key) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={`feature-key-${key}`}>
              <CardFeature feature={feature[key]} />
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </>
  );
}
