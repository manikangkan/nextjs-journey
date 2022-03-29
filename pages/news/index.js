const NewsArticleList = ({ articles }) => {
  return (
    <>
      <h1>List of News Article List</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.category}</p>
        </div>
      ))}
    </>
  );
};

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  console.log(`Pre rendering new articles list`);
    return {
    props: {
      articles: data,
    },
  };
}
