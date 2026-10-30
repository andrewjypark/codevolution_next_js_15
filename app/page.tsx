import Image from "next/image";

import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="ap_home_body_container">


    </div>
    <h1 className="ap_home_body_container_header_text">Welcome home!</h1>
    <Link className="ap_home_body_container_link_text" href="/blog">blog</Link>

    </>
  );
}
