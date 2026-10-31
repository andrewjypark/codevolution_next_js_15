// Next.js 15 Tutorial - 19 - Link Component

import Image from "next/image";

import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="ap_home_body_container">

      <h1 className="ap_home_body_container_header_text">Welcome home!</h1>
      <Link className="ap_home_body_container_link_text" href="/blog">blog</Link>
      <Link className="ap_home_body_container_link_text" href="/products">products</Link>

    </div>

    </>
  );
}
