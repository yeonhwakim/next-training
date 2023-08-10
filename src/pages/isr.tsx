import MeowArticle from "@/components/MeowArticle";
import { Product, getProducts } from "@/services/products";
import Link from "next/link";

type Props = {
  products: Product[];
  isrText: string;
};

export default function ISRPage({ products, isrText }: Props) {
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
      <p>{isrText}</p>
      <MeowArticle />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  const isr = await fetch("https://meowfacts.herokuapp.com");
  const isrData = await isr.json();
  const isrText = isrData.data[0];

  return {
    props: { products, isrText },
    revalidate: 10,
  };
}
