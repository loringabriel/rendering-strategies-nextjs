import Link from "next/link";

function Product({ product }) {
  return (
    <li
      key={product.id}
      className="w-64 inline-flex flex-col text-center lg:w-auto"
    >
      <Link href={`/product`} passHref>
        <div className="group relative cursor-pointer">
          <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-500">{product.color}</p>
            <h3 className="mt-1 font-semibold text-gray-900">
              <a href={product.href}>
                <span className="absolute inset-0" />
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-gray-900">{product.price}</p>
          </div>
        </div>
      </Link>

      <h4 className="sr-only">Available colors</h4>
      <ul
        role="list"
        className="mt-auto pt-6 flex items-center justify-center space-x-3"
      >
        {product.availableColors.map((color) => (
          <li
            key={color.name}
            className="w-4 h-4 rounded-full border border-black border-opacity-10"
            style={{ backgroundColor: color.colorBg }}
          >
            <span className="sr-only">{color.name}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}
export default Product;
