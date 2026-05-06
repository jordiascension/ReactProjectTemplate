import React from 'react';
import renderer from 'react-test-renderer';
import ProductList from './ProductList';

const sampleProducts = [
  { id: 1, name: 'Apple', price: 1.5 },
  { id: 2, name: 'Banana', price: 0.99 },
  { id: 3, name: 'Orange', price: 1.2 },
];

describe('ProductList', () => {
  it('renders all products and matches snapshot', () => {
    const tree = renderer.create(<ProductList products={sampleProducts} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
