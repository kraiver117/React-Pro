import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components';
import ProductCard from '../../src/components/index';
import { product2 } from '../data/products';

describe('Product Image', () => {
  test('should render an product image with image', () => {
    const wrapper = renderer.create(
      <ProductImage img={product2.img} />
    )

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should render a product card with image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          ({ product }) => (
            <>
              <ProductImage img={product.img} />
            </>
          )
        }
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
