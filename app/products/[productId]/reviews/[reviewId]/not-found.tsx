// "use client" tells Next.js this is a Client Component.
// That matters because we are calling usePathname(), which only works
// in a client-side component (not a server component).
"use client";

import { usePathname } from "next/navigation";

/*
 * This page is a custom 404-style page for a review route.
 *
 * Example of a normal valid review URL:
 * /products/1/reviews/1
 *
 * Example of a missing review route:
 * /products/1/reviews/1001
 *
 * In Next.js, this page can appear when a specific nested route
 * doesn't exist or if the app decides a review is not found.
 */

export default function NotFound() {
  // usePathname() returns the current URL path, such as:
  // "/products/1/reviews/1001"
  const pathname = usePathname();

  // The path is split into segments using "/"
  // Example:
  // "/products/1/reviews/1001"
  // becomes:
  // ["", "products", "1", "reviews", "1001"]
  //
  // So:
  // index 2 = productId -> "1"
  // index 4 = reviewId -> "1001"
  //
  // This is a common way to read route params from the URL manually.
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  // These variables are read from the URL, but they are not currently used
  // in the returned JSX below. This usually means the developer wanted to
  // capture the missing ids for debugging, future logic, or logging.
  // The page is still just showing a generic "Review Not Found" message.

  return (
    <div>
      <h2>Review {reviewId} not found for product {productId}</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}


