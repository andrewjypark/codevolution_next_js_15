"use client";

// Next.js 15 Tutorial - 20 - Active Links
/**
 * usePathname comes from next/navigation, and it’s a hook — it needs a live, mounted React instance in the browser that can re-run on every navigation to tell you the current URL. The App Router, by default, treats every component as a Server Component: it renders once, on the server (or at build time), produces HTML, and is done — there’s no persistent client-side instance of it sitting in the browser to re-render. Hooks like usePathname, useState, useEffect, onClick handlers, useContext, etc. all require that ongoing client-side lifecycle, so Next.js refuses to even bundle them into a Server Component — hence the build error the moment you imported something that depends on usePathname, before you’d even called it.
 * 
 * What a Client Component is: a component explicitly opted into the normal React-in-the-browser model by putting the literal string directive "use client"; as the very first line of the file (above imports, in its own line — I added it to app/products/page.tsx). That marks the whole module as something Next.js ships to the browser and hydrates, giving it access to hooks, state, event handlers, and browser APIs like window. The tradeoff is it ships more JS to the client and can’t do things Server Components get for free (direct async/await data fetching in the component body, reading cookies/headers server-side, zero client-side JS cost).
 */

import Link from "next/link"
import { usePathname } from "next/navigation";

export default function ProductList() {
    const productId = 100;
    // Next.js 15 Tutorial - 20 - Active Links
    const pathname = usePathname();

    return ( 

    
                <div className='ap_product_details_container'>
                    <Link className="ap_home_body_container_link_text" href="/">Home</Link>

                    <div>
                        <h1>Product list</h1>
                        <h2>
                            <Link href="/products/1">Product 1</Link> 
                        </h2>
                        <h2>                        
                            <Link href="/products/2">Product 2</Link> 
                        </h2>
                        <h2>                        
                            {// doing 'replace' replaces the current history instead of adding a new one. so if you backspace, after going to product 3, it goes home. 
                            }
                            <Link href="/products/3" replace>Product 3</Link> 
                        </h2>
                        <h2>            
                            {// using a template literal, backtick and curly braces
                            }         
                            <Link href={`/products/${productId}`}>Product One Hundred</Link> 
                        </h2>
                    </div>
                </div>

)
}