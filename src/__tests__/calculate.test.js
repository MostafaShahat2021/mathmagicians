import calculate from '../logic/calculate';

describe('Test for calculate function', () => {
  it('returns an object with null values for total, next, and operation when "AC" is passed', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('updates the "next" value when a numeric button is pressed and there is an operation', () => {
    const result = calculate({ total: 5, next: '2', operation: '+' }, '3');
    expect(result).toEqual({ total: 5, next: '23', operation: '+' });
  });

  it('clears the "next" value and updates the "total" value when an operation button is pressed after a number', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '+');
    expect(result).toEqual({ total: '5', next: null, operation: '+' });
  });

  it('updates the "total" value and clears the "next" value and operation when "=" is pressed after an operation', () => {
    const result = calculate({ total: 5, next: '3', operation: '+' }, '=');
    expect(result).toEqual({ total: '8', next: null, operation: null });
  });

  it('updates the "next" value to a decimal point when "." is pressed', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '.');
    expect(result).toEqual({ total: null, next: '5.', operation: null });
  });

  it('does not add a decimal point when "." is pressed and there already is one', () => {
    const result = calculate({ total: null, next: '5.5', operation: null }, '.');
    expect(result).toEqual({ total: null, next: '5.5', operation: null });
  });

  it('updates the "next" value to "-next" when "+/-" is pressed and "next" is present', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '+/-');
    expect(result).toEqual({ total: null, next: '-5', operation: null });
  });

  it('updates the "total" value to "-total" when "+/-" is pressed and "total" is present', () => {
    const result = calculate({ total: '5', next: null, operation: null }, '+/-');
    expect(result).toEqual({ total: '-5', next: null, operation: null });
  });
});
