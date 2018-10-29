import formatMoney from '../lib/formatMoney';

describe('formatMoney function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(10)).toEqual('$0.10');
  });

  it('leaves cents off for whole dollars', () => {
    expect(formatMoney(1000)).toEqual('$10');
    expect(formatMoney(100000)).toEqual('$1,000');
  });

  it('works with whole and fractional dollars', () => {
    expect(formatMoney(150)).toEqual('$1.50');
    expect(formatMoney(250075)).toEqual('$2,500.75');
  });

});
