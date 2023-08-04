import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `${slug} 제품`,
    description: `${slug} 제품 상세 페이지입니다.`,
  };
}

function SlugPage({ params }: Props) {
  if (params.slug === "nothing") {
    return notFound();
  }

  return <h1>{params.slug} 제품 설명 페이지!</h1>;
}

export default SlugPage;

export function generateStaticParams() {
  const products = ["pants", "skirts"];

  return products.map((product) => ({ slug: product }));
}
