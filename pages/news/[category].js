const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>Showing news for category {category}</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.category}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default ArticleListByCategory;

// export async function getServerSideProps(context) {
//   const { params, req, res, query } = context;
//   console.log(query)
//   console.log(req.headers.cookie);
//   res.setHeader("Set-Cookie", ["name=Manikangkan"]);
//   const { category } = params;
//   const response = await fetch(
//     `http://localhost:4000/news?category=${category}`
//   );
//   const data = await response.json();
//   return {
//     props: {
//       articles: data,
//       category,
//     },
//   };
// }
export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  console.log(`Pre rendering new articles for category ${category}`);
  return {
    props: {
      articles: data,
      category,
    },
  };
}
