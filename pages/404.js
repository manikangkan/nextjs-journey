import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <div className="not-found">
        <h1>Opsss...</h1>
        <h2>The page can not be found</h2>
        <p>
          Go back to the
          <Link href="/">
            <a> Homepage</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
