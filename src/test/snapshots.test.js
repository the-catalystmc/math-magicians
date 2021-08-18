import React from 'react';

import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const calculatorTree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(calculatorTree).toMatchSnapshot();
});