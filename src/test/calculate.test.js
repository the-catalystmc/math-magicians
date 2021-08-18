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
    })
})
