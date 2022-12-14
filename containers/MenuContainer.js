import { Grid } from "@nextui-org/react";
import CardMenu from "components/CardMenu";
import CardEmpanada from "components/CardEmpanada";
import NextLink from "next/link";
import { TiArrowBackOutline } from "react-icons/ti";
import Head from "next/head";
import { Fragment } from "react";

export default function MenuContainer({ products, nameId = "Menu" }) {
  return (
    <>
      <Head>
        <title>{nameId}</title>
      </Head>

      <div className="group cursor-pointer">
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
            <Fragment key={`productos-menu-${product._id}`}>
              {nameId !== "Empanadas" ? (
                <Grid xs={12} sm={6} md={4} lg={2}>
                  <CardMenu product={product} nameId={nameId} />
                </Grid>
              ) : (
                <Grid xs={12} sm={12} md={12} lg={12}>
                  <CardEmpanada product={product} />
                </Grid>
              )}
            </Fragment>
          ))}
        </Grid.Container>
      </div>
    </>
  );
}
