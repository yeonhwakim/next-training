import { getProducts } from "@/services/products";
import Link from "next/link";

function ProductsPage() {
  const products = getProducts();

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
