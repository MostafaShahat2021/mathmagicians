import operate from '../logic/operate';

describe('Test for operate function', () => {
  test('calculate the  sum of two numbers', () => {
    expect(operate(5, 2, '+')).toEqual('7');
  });
  test('calculate the Subtract of two numbers', () => {
    expect(operate(6, 3, '-')).toEqual('3');
  });
  test('multiply two numbers', () => {
    expect(operate(10, 10, 'x')).toEqual('100');
  });
  test('divide two numbers', () => {
    expect(operate(8, 2, '÷')).toEqual('4');
  });
  test('Mod of two numbers', () => {
    expect(operate(12, 3, '%')).toEqual('0');
  });
});
