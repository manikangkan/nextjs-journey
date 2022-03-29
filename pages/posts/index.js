import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <>
      <div>List of posts</div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`} passHref>
            <h1>{post.title}</h1>
          </Link>
          <h5>{post.id}</h5>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
      // posts: data,
    },
  };
}
// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();

//   return {
//     props: {
//       posts: data.slice(0, 3),
//     },
//   };
// }
