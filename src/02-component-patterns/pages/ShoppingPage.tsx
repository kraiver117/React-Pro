import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { Product } from '../interfaces/interfaces';
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

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if ( Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // Delete Product
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;    
            return rest;

            // if (count === 0) {
            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;    
            //     return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [product.id]: { ...product, count }
            // };
        });
    }

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
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-cart">
                {
                    Object.keys(shoppingCart).map((key: string) => (
                        <ProductCard 
                            key={key}
                            product={ shoppingCart[key] }
                            className='bg-dark text-white'
                            style={{ width: '100px' }}
                            onChange={ onProductCountChange }
                            value={ shoppingCart[key].count }
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons 
                                className='custom-buttons' 
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
