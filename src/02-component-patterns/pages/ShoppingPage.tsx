import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard";

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
                    <ProductImage />
                    <ProductTitle title={ "" } />
                    <ProductButtons counter={0} increaseBy={function (value: number): void {
                        throw new Error("Function not implemented.");
                    } } />
                </ProductCard>
            </div>
        </div>
    )
}
