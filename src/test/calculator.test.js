import calculate from '../logic/calculate';
import calculator from '../logic/calculate';

describe('returns correct values', () => {
    it('returns empty object', () => {
        const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
        expect(result).toStrictEqual({});
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
})
