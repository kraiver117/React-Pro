# product-card-kraiver

Este es un paquete de pruebas de despliegue en NPM

### Angel Gutiérrez

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'product-card-kraiver';
```
```
<ProductCard 
    product={ product }
    initialValues={{
        count: 4,
        maxCount: 15
    }}
>
    {
        ({count, reset, increaseBy, isMaxCountReached, maxCount}) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```