import { useRouter } from "next/router";

export default function Product({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <h2>
          {product.id} : {product.name}, {product.price}
        </h2>
        <p>{product.description}</p>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(`Generating page for ${params.productId}`);
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  // if (!data.id) {
  //   return { notFound: true };
  // }

  // console.log(`Generating page for ${params.postId}`);
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
