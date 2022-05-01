export default function Products() {
  return (
    <ul>
      <Product name="Mackbook Air" price="1299" />
      <Product name="Mackbook Pro" price="1699" />
    </ul>
  );
}

function Product({ name, price }) {
  return (
    <li>
      <h1>{name}</h1>
      <p>${price}</p>
    </li>
  );
}


