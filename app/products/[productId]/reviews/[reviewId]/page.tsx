import { notFound } from "next/navigation"

export default async function ProductReview({
    params
}: {
    // params is of type promise that resolves to productID and reviewID
    params: Promise<{ productId: string; reviewId: string}>
}) {
    // we destructure productId and ReviewId by awaiting params
    const {productId, reviewId } = await params

    if(parseInt(reviewId) > 1000) {
        notFound();
    }

    return <h1>Details {reviewId} for product {productId}</h1>
}