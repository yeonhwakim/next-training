import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/services/products";
import Link from "next/link";

import styles from "./page.module.css";
import { Suspense } from "react";
import ProductsLoading2 from "./loading2";

// export const revalidate = 3;

async function ProductsPage() {
  const products = await getProducts();

  const ssg = await fetch("https://meowfacts.herokuapp.com");
  const ssgData = await ssg.json();
  const ssgText = ssgData.data[0];

  const isr = await fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 3 },
  });
  const isrData = await isr.json();
  const isrText = isrData.data[0];

  const ssr = await fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 0 },
    // cache: "no-store"
  });
  const ssrData = await ssr.json();
  const ssrText = ssrData.data[0];

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
      <Suspense fallback={<ProductsLoading2 />}>
        <p className={styles.article}>{ssgText}</p>
        <p className={styles.article}>{isrText}</p>
        <p className={styles.article}>{ssrText}</p>
      </Suspense>
      <MeowArticle />
    </>
  );
}

export default ProductsPage;
