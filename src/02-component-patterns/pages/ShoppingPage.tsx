import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
    const {  onProductCountChange, shoppingCart } = useShoppingCart();

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
