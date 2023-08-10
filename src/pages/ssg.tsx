import MeowArticle from "@/components/MeowArticle";
import { Product, getProducts } from "@/services/products";
import Link from "next/link";

type Props = {
  products: Product[];
  ssgText: string;
};

export default function SSGPage({ products, ssgText }: Props) {
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
      <p>{ssgText}</p>
      <MeowArticle />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  const ssg = await fetch("https://meowfacts.herokuapp.com");
  const ssgData = await ssg.json();
  const ssgText = ssgData.data[0];

  return {
    props: { products, ssgText },
  };
}
