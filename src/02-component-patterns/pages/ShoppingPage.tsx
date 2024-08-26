import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import "../styles/custom-styles.css"

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

                <ProductCard product={product}>

                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title title="cafe" />
                    <ProductCard.Buttons />

                </ProductCard>

                <ProductCard product={product} className="bg-dark" >

                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-white' />
                    <ProductButtons className="custom-buttons" />

                </ProductCard>

                <ProductCard product={product} className="bg-dark" style={{ backgroundColor: 'red' }} >

                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />

                </ProductCard>

            </div>

        </div>

    )
}
