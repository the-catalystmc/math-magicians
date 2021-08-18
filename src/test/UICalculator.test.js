import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('The UI works properly and it\'s accesible', () => {
  test('loads and displays 0 in display', () => {
    render(<Calculator />);
    expect(screen.getByRole('textbox', { class: /Display/i })).toHaveTextContent('0');
  });

  test('the user perfoms an operation', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('3'));
    fireEvent.click(screen.queryByText('+'));
    fireEvent.click(screen.queryByText('6'));
    fireEvent.click(screen.queryByText('='));

    expect(screen.getByRole('textbox', { class: /Display/i })).toHaveTextContent('9');
  });

  test('the user resets the calculator', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('3'));
    fireEvent.click(screen.queryByText('5'));
    fireEvent.click(screen.queryByText('9'));
    fireEvent.click(screen.queryByText('AC'));

    expect(screen.getByRole('textbox', { class: /Display/i })).toHaveTextContent('0');
  });

  test('the user divides by 0', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('9'));
    fireEvent.click(screen.queryByText('÷'));
    fireEvent.click(screen.queryByText('0'));
    fireEvent.click(screen.queryByText('='));

    expect(screen.getByRole('textbox', { class: /Display/i })).toHaveTextContent('Error');
  });

  test('the user press the +/- sign', () => {
    render(<Calculator />);

    fireEvent.click(screen.queryByText('3'));
    fireEvent.click(screen.queryByText('6'));
    fireEvent.click(screen.queryByText('+/-'));

    expect(screen.getByRole('textbox', { class: /Display/i })).toHaveTextContent('-36');
  });
});
