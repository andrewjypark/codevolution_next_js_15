// Next.js 15 Tutorial - 17 - Routing Metadata

// "use client";
// import { useState } from "react";
import Counter from "./counter";

export const metadata = {
    title: "Counter"
}

export default function CounterPage() {
    return <Counter />
}