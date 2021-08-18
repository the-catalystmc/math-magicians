import calculate from '../logic/calculate';

describe('returns correct values', () => {
    describe('tests for AC key', () => {
        it('returns empty object', () => {
            const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
            expect(result).toStrictEqual({ total: null, next: null, operation: null });
        })
    })

    describe('test if user passes number', () => {
        it('returns updated next value', () => {
            const result = calculate({ total: '10', next: '5', operation: '+' }, '7');
            expect(result).toStrictEqual({ total: '10', next: '57', operation: '+' });
        })
        it('if there is no operation update next', () => {
            const result = calculate({ total: '', next: '5', operation: '' }, '7');
            expect(result).toStrictEqual({ total: '', next: '57', operation: '' });
        })
        it('if there is no next update next', () => {
            const result = calculate({ total: '', next: '', operation: '' }, '7');
            expect(result).toStrictEqual({ total: '', next: '7', operation: '' });
        })
    })

    describe('tests for decimal key', () => {
        it('returns the expected object', () => {
            const result = calculate({ total: '10', next: '5.07', operation: '+' }, '.');
            expect(result).toStrictEqual({});
        })

        it('returns the expected object', () => {
            const result = calculate({ total: '10', next: '5', operation: '+' }, '.');
            expect(result).toStrictEqual({ total: '10', next: '5.', operation: '+' });
        })

        it('returns the expected object', () => {
            const result = calculate({ total: null, next: null, operation: '+' }, '.');
            expect(result).toStrictEqual({ total: null, next: '0.', operation: '+' });
        })

        it('returns the expected object', () => {
            const result = calculate({ total: '8.07', next: null, operation: null }, '.');
            expect(result).toStrictEqual({});
        })

        it('returns the expected object', () => {
            const result = calculate({ total: '8', next: null, operation: null }, '.');
            expect(result).toStrictEqual({ total: '8.', next: null, operation: null });
        })

        it('returns the expected object', () => {
            const result = calculate({ total: null, next: null, operation: null }, '.');
            expect(result).toStrictEqual({ total: '0.' });
        })
    })

    describe('tests for equal sign', () => {
        it('should return error in total', () => {
            const result = calculate({ total: '987', next: '0', operation: '÷' }, '=');
            expect(result).toStrictEqual({ total: 'Error', next: null, operation: null });
        })

        it('should return empty', () => {
            const result = calculate({ total: '987', next: null, operation: '÷' }, '=');
            expect(result).toStrictEqual({});
        })

        it('should return empty', () => {
            const result = calculate({ total: '987', next: null, operation: null }, '=');
            expect(result).toStrictEqual({});
        })

        it('should perform an operation', () => {
            const result = calculate({ total: '987', next: '2', operation: '+' }, '=');
            expect(result).toStrictEqual({ total: '989', next: null, operation: null });
        }) 
    })

    describe('tests for positive-negative sign', () => {
        it('should return the positive or negative of the number', () => {
            const result = calculate({ total: '987', next: '2', operation: '+' }, '+/-');
            expect(result).toStrictEqual({ total: '987', next: '-2', operation: '+' });
        })

        it('should return the positive or negative of the number', () => {
            const result = calculate({ total: '987', next: null, operation: '+' }, '+/-');
            expect(result).toStrictEqual({ total: '-987', next: null, operation: '+' });
        })

        it('should return empty if no total and no next', () => {
            const result = calculate({ total: null, next: null, operation: '+' }, '+/-');
            expect(result).toStrictEqual({});
        })
    })

    describe('tests for operation buttons', () => {
        it('should return the expected object', () => {
            const result = calculate({ total: null, next: null, operation: null }, '-');
            expect(result).toStrictEqual({});
        })

        it('should return the expected object', () => {
            const result = calculate({ total: '70', next: null, operation: null }, '-');
            expect(result).toStrictEqual({ total: '70', next: null, operation: '-' });
        })

        it('should return the expected object', () => {
            const result = calculate({ total: '70', next: '7', operation: '-' }, '+');
            expect(result).toStrictEqual({ total: '63', next: null, operation: '+' });
        })

        it('should return the expected object', () => {
            const result = calculate({ total: null, next: '7', operation: null }, '+');
            expect(result).toStrictEqual({ total: '7', next: null, operation: '+' });
        })
    })
})
