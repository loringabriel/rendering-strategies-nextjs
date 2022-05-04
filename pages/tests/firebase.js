import Product from "../../components/Product";
import ProductContainer from "../../components/ProductContainer";
import Link from "next/link";

export async function getServerSideProps() {
  const products = await fetch(
    "https://nextjs-rendering-75bfd-default-rtdb.europe-west1.firebasedatabase.app/.json"
  ).then((res) => res.json());

  return { props: { products } };
}

export default function ProductsPage({ products }) {
  return (
    <>
      <ProductContainer>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </ProductContainer>
      <Link href={"/tests/products-csr"}>Products - CSR</Link>
    </>
  );
}
