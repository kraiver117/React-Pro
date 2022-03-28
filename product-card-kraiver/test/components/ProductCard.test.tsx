import React from "react";
import renderer, { act } from 'react-test-renderer';
import ProductCard from "../../src/components";
import { product2 } from '../data/products';

describe('test product card functionality', () => { 
  test('should show the component correctly', () => {
    // Wrapper to create a renderer component
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          ({ product }) => (
            <>
              <h1>{product.title}</h1>
            </>
          )
        }
      </ProductCard>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should increase count', () => {  
    const wrapper =  renderer.create(
      <ProductCard product={product2}>
        {
          ({ count, increaseBy }) => (
            <>
              <h1>Product Card</h1>
              <span>{ count }</span>
              <button onClick={() => increaseBy(1)}></button>
            </>
          )
        }
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    // Action - click the button
    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();
    
    //Check counter value
    expect((tree as any).children[1].children[0]).toBe('1');
  })
});