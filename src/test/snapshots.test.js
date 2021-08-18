import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('Tests snapshots of components', () => {
  it('renders correctly', () => {
    const calculatorTree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(calculatorTree).toMatchSnapshot();
  });
  
  it('renders correctly', () => {
    const homeTree = renderer
      .create(<Home />)
      .toJSON();
    expect(homeTree).toMatchSnapshot();
  });
  
  it('renders correctly', () => {
    const quoteTree = renderer
      .create(<Quote />)
      .toJSON();
    expect(quoteTree).toMatchSnapshot();
  });
})
