import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {

    id: '1',
    title: 'Product 1',
    img: './coffee-mug.png'

}

export const ShoppingPage = () => {
    return (

        <div>

            <h1>Shopping page</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product} >

                    <ProductCard.Image />
                    <ProductCard.Title title="cafe" />
                    <ProductCard.Buttons />

                </ProductCard>
                <ProductCard product={product} >

                    <ProductImage />
                    <ProductTitle title="cafe" />
                    <ProductButtons />

                </ProductCard>

            </div>

        </div>

    )
}
