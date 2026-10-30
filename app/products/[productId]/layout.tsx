// Next.js 15 Tutorial - 15 - Nested Layouts

export default function ProductDetailsLayout({
    children,
}: {
    // the component type accepts children prop of type of React.ReactNode
    children: React.ReactNode;
}) {
    return (
        /* this time, the children prop represents the product id page content. */
        <>

            <div className= 'ap_grid_container'>
                <div className='ap_grid_1'>
                <div className='ap_product_details_container'>
                    <h2>Featured Products</h2>    
                    {children}
                </div>

                </div>

            </div>
        </>
    )
}