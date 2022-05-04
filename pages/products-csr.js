import { useEffect, useState } from "react";
import Product from "../components/Product";
import ProductContainer from "../components/ProductContainer";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(
      "https://62108f1f4cd3049e177f3adf.mockapi.io/products"
    );
    const products = await response.json();
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContainer>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </ProductContainer>
  );
}
