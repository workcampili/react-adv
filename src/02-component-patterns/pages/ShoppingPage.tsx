import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components/';
import { products } from '../data/products';


import '../styles/custom-styles.css'


const product = products[0]

const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white "
                initialValues={{
                    count: 4,
                    //maxCount: 10
                }}
            >

                {
                    ({ reset, isMaxCountReached, increaseBy, count, maxCount }) => (
                        <>

                            <ProductImage
                                img={product.img}
                                className="custom-image"
                                style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 10px 10px 10px' }}
                            />
                            <ProductTitle
                                title={product.title}
                                className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            {!isMaxCountReached ? <button onClick={() => increaseBy(2)}>+2</button> : null}
                            <span>{count}- {maxCount}</span>



                        </>

                    )
                }

            </ProductCard>
        </div >


    )
}

export default ShoppingPage
