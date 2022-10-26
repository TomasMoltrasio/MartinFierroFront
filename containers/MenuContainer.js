import { Grid } from "@nextui-org/react";
import CardMenu from "components/CardMenu";
import CardEmpanada from "components/CardEmpanada";
import NextLink from "next/link";
import { TiArrowBackOutline } from "react-icons/ti";
import Head from "next/head";

export default function MenuContainer({ products, nameId = "Menu" }) {
  return (
    <>
      <Head>
        <title>{nameId}</title>
      </Head>

      <div className="w-full h-full flex flex-col items-center justify-start">
        <div className="w-full h-12 flex flex-row items-center justify-between px-4">
          <NextLink href="/menu">
            <div className="h-12 flex flex-row items-center justify-center cursor-pointer">
              <TiArrowBackOutline size={30} className="cursor-pointer" />
              <h3 className="text-xl font-bold">Menu</h3>
            </div>
          </NextLink>
          <h3 className="text-2xl font-bold text-center">{nameId}</h3>
        </div>
        <Grid.Container gap={2}>
          {products.map((product) => (
            <>
              {product.name !== "Empanadas" ? (
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={`productos-${nameId}-${product._id}`}
                >
                  <CardMenu product={product} nameId={nameId} />
                </Grid>
              ) : (
                <Grid
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  key={`productos-${nameId}-${product._id}`}
                >
                  <CardEmpanada product={product} />
                </Grid>
              )}
            </>
          ))}
        </Grid.Container>
      </div>
    </>
  );
}
