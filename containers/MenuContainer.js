import { Pagination, Grid } from "@nextui-org/react";
import CardMenu from "components/CardMenu";

export default function MenuContainer({ products, nameId = "Menu" }) {
  const currentPage = 1;
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Grid.Container gap={2}>
        {currentProducts.map((product) => (
          <Grid
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={`productos-${nameId}-${product._id}`}
          >
            <CardMenu product={product} nameId={nameId} />
          </Grid>
        ))}
      </Grid.Container>

      <Pagination
        total={Math.ceil(products.length / itemsPerPage)}
        current={currentPage}
        onChange={(page) => console.log(page)}
      />
    </div>
  );
}
