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
                <ProductCard product={ product }>
                    <ProductCard.Image />
                    <ProductCard.Title title={ 'Hola mundo' } />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard 
                    product={ product }
                    className='bg-dark'
                >
                    <ProductImage />
                    <ProductTitle title="Cafe" />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
