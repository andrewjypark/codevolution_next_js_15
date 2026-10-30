// Next.js 15 Tutorial - 17 - Routing Metadata

// the page.tsx metadata takes priority over layouts.tsx when they overlap.
export const metadata = {
    title: "About Codevolution"
}

export default function About() {
    return <h1>About me</h1>
}