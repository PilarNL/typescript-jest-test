import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should test name and price type', () => {
    //Ssystem under test
    const sut = createSut('Product 1', 10.99);
    expect(sut).toHaveProperty('name', 'Product 1');
    expect(sut.price).toBeCloseTo(10.99);
  });
});
