type Props = {
  params: {
    slug: string
  }
}

function SlugPage({params}: Props) {
  return (
    <h1>{params.slug} 제품 설명 페이지!</h1>
  );
}

export default SlugPage;

export function generateStaticParams() {
  const products = ['pants', 'skirts']

  return products.map(product =>({slug: product}))
}