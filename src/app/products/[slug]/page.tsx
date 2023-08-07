import { getProduct, getProducts } from "@/services/products";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  return {
    title: `${product?.name} 제품`,
    description: `${product?.name} 제품 상세 페이지입니다.`,
  };
}

async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <h1>{product.name} 제품 설명 페이지!</h1>;
}

export default ProductPage;

// SSG
export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({ slug: product.id }));
}
