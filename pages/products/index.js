export default function ProductList({ products }) {
  return (
    <>
      <div>List of products</div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>
            {product.id} : {product.name}, {product.price}
          </h2>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  console.log(`Generating / Registering ProductList`);
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
