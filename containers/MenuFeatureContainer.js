import { Grid } from "@nextui-org/react";
import CardFeature from "components/CardFeature";
import Head from "next/head";

export default function MenuFeatureContainer() {
  const feature = {
    1: {
      title: "Meganesas",
      image: "/meganesas/mega-chyp.jpg",
      link: "/menu/1",
    },
    2: {
      title: "Picadas",
      image: "/picadas/picada.jpg",
      link: "/menu/2",
    },
    3: {
      title: "Empanadas",
      image: "/empanadas/empanada-carne.jpg",
      link: "/menu/3",
    },
    4: {
      title: "Minutas",
      image: "/minutas/bife.jpg",
      link: "/menu/4",
    },
    5: {
      title: "Pastas",
      image: "/pastas/fideos.jpg",
      link: "/menu/5",
    },
    6: {
      title: "Acompañamientos",
      image: "/acompañamientos/papas.png",
      link: "/menu/6",
    },
    7: {
      title: "Postres",
      image: "/postres/flan.jpg",
      link: "/menu/7",
    },
    8: {
      title: "Bebidas",
      image: "/bebidas/coca-cola.png",
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
          gap={2}
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
