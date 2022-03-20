import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placed order successfully");
    router.replace("/product");
    // router.push("/product");
  };

  return (
    <>
      <h1>Home page</h1>
      <Link href="/posts">Posts</Link>
    </>
  );
}

export default Home;
