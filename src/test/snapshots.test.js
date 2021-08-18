import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const calculatorTree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(calculatorTree).toMatchSnapshot();
  console.log(calculatorTree);
});