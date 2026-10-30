// Next.js 15 Tutorial - 18 - title Metadata

import { Metadata } from "next";

export const metadata: Metadata = {
    title:"Blog",
    // absolute: "Blog"
}

export default function Profile(){
    return <h1>Blog</h1>;
    
}