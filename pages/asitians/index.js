import Link from "next/link";
import React from "react";
import styles from "../../styles/Asitians.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { asitians: data },
  };
};

export default function index({ asitians }) {
  return (
    <div>
      <h1>asity team</h1>
      {asitians.map((asitian) => (
        <Link key={asitian.id} href={"/asitians/" + asitian.id}>
          <a className={styles.single}>
            <h3>{asitian.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
