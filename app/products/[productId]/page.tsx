// Next.js 15 Tutorial - 17 - Routing Metadata

import { Metadata } from "next";

type Props = {
    // the type of params is a promise that resolves to an object containing the dynamic segments as key value pairs. In our case, it's pructId, the name of the folder.
    params: Promise<{ productId: string }>;
}

// this function receives params of type props and returns a promise of type metadata. 

// now if we go to http://localhost:3001/products/1, the page title is Product 1. 
export const generateMetadata = async ({
    params,
} : Props): Promise<Metadata> => {
    // we await params and access product id
    const id = (await params).productId;
    // we'll return a promise that results in 100ms
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${id}`);
        }, 100);
    });
    return {
        // title:`Product ${id}`,
        title:`Product ${title}`,
    };
}


export default async function ProductDetails({
    params,
}: Props) {
    // we're going to crete a productId const and have it access the productId.
    const productId = (await params).productId;
    // display product id in the ui 
    return <h1>Details about product {productId} </h1>
}