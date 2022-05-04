import Product from "../components/Product";
import ProductContainer from "../components/ProductContainer";

export async function getServerSideProps() {
  const products = await fetch(
    "https://62108f1f4cd3049e177f3adf.mockapi.io/products"
  ).then((res) => res.json());

  return { props: { products } };
}

export default function ProductsPage({ products }) {
  return (
    <ProductContainer>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </ProductContainer>
  );
}
