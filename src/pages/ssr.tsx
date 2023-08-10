import MeowArticle from "@/components/MeowArticle";
import { Product, getProducts } from "@/services/products";
import Link from "next/link";

type Props = {
  products: Product[];
  ssrText: string;
};

export default function SSRPage({ products, ssrText }: Props) {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <p>{ssrText}</p>
      <MeowArticle />
    </>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  const ssr = await fetch("https://meowfacts.herokuapp.com");
  const ssrData = await ssr.json();
  const ssrText = ssrData.data[0];

  return {
    props: { products, ssrText },
  };
}
