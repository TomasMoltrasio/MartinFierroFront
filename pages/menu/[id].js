import { getProductsByCategory } from "services/products";
import MenuContainer from "containers/MenuContainer";

export default function MenuSingle({ products, nameId }) {
  return (
    <>
      <MenuContainer products={products} nameId={nameId} />
    </>
  );
}

export async function getStaticPaths() {
  const categories = 8;
  const paths = [];
  for (let i = 1; i <= categories; i++) {
    paths.push({ params: { id: i.toString() } });
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const categories = {
    1: "Meganesas",
    2: "Picadas",
    3: "Empanadas",
    4: "Minutas",
    5: "Pastas",
    6: "Acompañamientos",
    7: "Postres",
    8: "Bebidas",
  };
  const nameId = categories[id];
  const products = await getProductsByCategory(nameId);
  products.sort((a, b) => a.name.localeCompare(b.name));
  products.sort((a, b) => a.price - b.price);

  return {
    props: {
      products,
      nameId,
    },
  };
}
