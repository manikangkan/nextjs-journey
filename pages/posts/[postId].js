import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <span>{post.id}</span>
        <h1>{post.title}</h1>
        <h5>{post.body}</h5>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: { postId: `${post.id}` },
  //   };
  // });
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: true,
    // paths,
    // fallback: false,
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: { postId: "1" },
//       },
//       {
//         params: { postId: "2" },
//       },
//       {
//         params: { postId: "3" },
//       },
//     ],
//     fallback: false,
//   };
// }

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return { notFound: true };
  }

  console.log(`Generating page for ${params.postId}`);
  return {
    props: {
      post: data,
    },
  };
}
