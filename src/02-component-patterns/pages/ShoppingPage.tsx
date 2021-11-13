import React from 'react'
import { callbackify } from 'util';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components/';

import '../styles/custom-styles.css'


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

                <ProductCard product={product} className="bg-dark text-white ">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={''} className="text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                {/* <ProductCard product={product} >
                    <ProductCard.Title />
                    <ProductCard.Image />
                    <ProductCard.Buttons />
                </ProductCard> */}

                <ProductCard
                    product={product}
                    className="bg-dark text-white "
                >
                    <ProductImage className="custom-image" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} />
                    <ProductTitle title={'titulo -enviado x props'} className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{ backgroundColor: '#70d1f8' }}
                >
                    <ProductImage
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} />
                    <ProductTitle style={{ fontSize: '25px' }} />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end',
                    }} />
                </ProductCard>

            </div>
        </div>
    )
}

export default ShoppingPage
