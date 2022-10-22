import { Pagination, Grid, Dropdown, Container } from "@nextui-org/react";
import CardMenu from "components/CardMenu";
import NextLink from "next/link";
import { useState } from "react";

export default function MenuContainer({ products, nameId = "Menu" }) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [total, setTotal] = useState(products.length);
  const [productsToShow, setProductsToShow] = useState(
    products.slice(0, limit)
  );

  const handlePageChange = (page) => {
    setPage(page);
    const start = (page - 1) * limit;
    const end = start + limit;
    setProductsToShow(products.slice(start, end));
  };

  const handleLimitChange = (limit) => {
    setLimit(limit);
    const start = (page - 1) * limit;
    const end = start + limit;
    setProductsToShow(products.slice(start, end));
    setTotal(products.length);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Grid.Container gap={2}>
        {productsToShow.map((product) => (
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
        total={Math.ceil(total / limit)}
        current={page}
        onChange={handlePageChange}
        limit={limit}
        onLimitChange={handleLimitChange}
        className="mt-4 mb-4"
      />
    </div>
  );
}
