import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components/';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { Product } from '../interfaces/interfaces';

import '../styles/custom-styles.css'

const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                {products.map((product: Product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className="bg-dark text-white "
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id] ? shoppingCart[product.id].count : 0}

                    >
                        <ProductImage
                            img={product.img}
                            className="custom-image"
                            style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                        />
                        <ProductTitle
                            title={product.title}
                            className="text-bold" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>

                ))}
            </div>

            <div className="shopping-cart">
                <h5>Shopping Cart</h5>
                {Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        product={product}
                        className="bg-dark text-white "
                        style={{ width: '100px' }}
                        value={product.count}
                        onChange={onProductCountChange}
                    >
                        <ProductImage className="custom-image" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))}




            </div>

            {/* <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div> */}
        </div >
    )
}

export default ShoppingPage
