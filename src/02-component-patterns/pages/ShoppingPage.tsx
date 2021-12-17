import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css';
import { useState } from 'react';

const product1 = {
    id: '1',
    title: 'Coffe Mug - 1',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffe Mug - 2',
    img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ 
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map( product => (
                        <ProductCard 
                            key={product.id}
                            product={ product }
                            className='bg-dark text-white'
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-cart">
                <ProductCard 
                    product={ product2 }
                    className='bg-dark text-white'
                    style={{ width: '100px' }}
                >
                    <ProductImage className='custom-image' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>
                <ProductCard 
                    product={ product2 }
                    className='bg-dark text-white'
                    style={{ width: '100px' }}
                >
                    <ProductImage className='custom-image' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>
            </div>
        </div>
    )
}
