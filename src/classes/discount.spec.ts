import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount';

const createSut = (classNaame: new () => Discount): Discount => {
  return new classNaame();
};

describe('Discount', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have no discount', () => {
    //System under test
    const sut = createSut(NoDiscount);
    expect(sut.calculate(100)).toBe(100);
  });

  it('should have ten percent discount', () => {
    //System under test
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(100)).toBe(90);
  });

  it('should have fifty percent discount', () => {
    //System under test
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(100)).toBe(50);
  });
});
