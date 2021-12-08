import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.svg" width={130} height={50} />
      </div>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <Link href="/asitians">
        <a>asity</a>
      </Link>
    </nav>
  );
}
