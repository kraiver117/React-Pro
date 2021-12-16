import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffe Mug - 1',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ 
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard 
                    product={ product }
                    className='bg-dark text-white'
                >
                    <ProductCard.Image />
                    <ProductCard.Title title={ 'Hola mundo' } />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>

                <ProductCard 
                    product={ product }
                    className='bg-dark text-white'
                >
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-bold' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>
            </div>
        </div>
    )
}
