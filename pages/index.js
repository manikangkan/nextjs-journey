import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>asity | home</title>
        <meta name="keywords" content="manikangkan" />
      </Head>
      <div className={styles.container}>
        <h1>hello homepage you know</h1>
        <h1>this is a home page got it</h1>
        <Link href="/asity">
          <a>back to asity</a>
        </Link>
      </div>
    </>
  );
}
