import Link from "next/link";

const products = ["shirts", "pants", "skirt", "shoes"];
function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
