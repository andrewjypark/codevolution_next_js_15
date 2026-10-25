export default async function ProductDetails({
    params,
}: {
    // the type of params is a promise that resolves to an object containing the dynamic segments as key value pairs. In our case, it's pructId, the name of the folder.
    params: Promise<{ productId: string }>;
}) {
    // we're going to crete a productId const and have it access the productId.
    const productId = (await params).productId;
    // display product id in the ui 
    return <h1>Details about product {productId} </h1>
}