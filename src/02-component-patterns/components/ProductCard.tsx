import { ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

export const ProductImage = ({ img = '' }) => {
    return (
        <img className={ styles.productImg } src={ img ? img : noImage } alt="Product" />
    )
}

export const ProductTitle = ({ title }: { title: string}) => {
    return (
        <span className={ styles.productDescription }>{ title }</span>
    )
}

interface ProductButtonProps {
    counter: number;
    increaseBy: (value: number) => void;
}

export const ProductButtons = ({ counter, increaseBy }: ProductButtonProps) => {
    return (
        <div className={ styles.buttonsContainer }>
            <button className={ styles.buttonMinus } onClick={ () => increaseBy(-1) }>
                -
            </button>
            <div className={ styles.countLabel }>
                {counter}
            </div>
            <button className={ styles.buttonAdd } onClick={ () => increaseBy(1) }>
                +
            </button>
        </div>
    )
}

export const ProductCard = ({ children, product }: Props) => {
    const { counter, increaseBy } = useProduct();

    return (
        <div className={ styles.productCard }>
            { children }
            {/* <ProductImage img={ product.img } />
            <ProductTitle title={ product.title} />
            <ProductButtons 
                counter={ counter } 
                increaseBy={ increaseBy } 
            /> */}
        </div>
    )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
