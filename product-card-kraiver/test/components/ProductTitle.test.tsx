import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {

    test('Should show component correctly with the custom title', () => {
        const wrapper = renderer.create(
            <ProductTitle title='Custom' className='custom' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Should show the component with the product name', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
})