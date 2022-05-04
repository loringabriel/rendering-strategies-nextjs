export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://62108f1f4cd3049e177f3adf.mockapi.io/products/${id}`
  );
  const productData = await res.json();

  return { props: { productData } };
}

export default function ProductPage({ productData }) {
  return (
    <main className="p-16">
      <h1>{productData.name}</h1>
      <img className="w-40" src={productData.image} />
      <h2>{productData.price}</h2>
      <button>Add to cart</button>
    </main>
  );
}
