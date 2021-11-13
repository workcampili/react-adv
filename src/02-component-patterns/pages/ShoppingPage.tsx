import React from 'react'
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components/';


const product = {
    id: '1',
    title: 'Coffe Mug -Card',
    img: './coffee-mug.png'
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title title={''} />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle title={'titulo -enviado x props'} />
                    <ProductButtons />
                </ProductCard>

            </div>
        </div>
    )
}

export default ShoppingPage
