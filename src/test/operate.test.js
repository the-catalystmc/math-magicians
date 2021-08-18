import operate from '../logic/operate';

describe('calculates using operator', () => {
    it('sums two numbers', () => {
        const result = operate(5, 5, '+');
        expect(result).toBe('10')
    })
    it('minus two numbers', () => {
        const result = operate(10, 5, '-');
        expect(result).toBe('5')
    })
    it('multiply two numbers', () => {
        const result = operate(5, 5, 'x');
        expect(result).toBe('25')
    })
    it('divide two numbers', () => {
        const result = operate(10, 5, '÷');
        expect(result).toBe('2')
    })
})