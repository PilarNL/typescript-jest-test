import { ShoppingCart } from './shopping-cart';
import { Discount } from './discount';
import { Product } from './product';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);

  return {
    sut,
    discountMock,
  };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}

  return new DiscountMock();
};

const createProduct = (name: string, price: number) => {
  class ProductMock implements Product {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }

  return new ProductMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const product1 = createProduct('Product 1', 10);
  const product2 = createProduct('Product 2', 20);

  sut.addItem(product1);
  sut.addItem(product2);

  return {
    sut,
    discountMock,
  };
};

describe('ShoppingCart', () => {
  it('should be an empty cart when initialized', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 items when 2 items are added', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should display the correct total when items are added', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(30);
    expect(sut.totalWithDiscount()).toBe(30);
  });

  it('should add products and clear the cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should add products and remove them', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should call the discount calculate method once', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockCalculateSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockCalculateSpy).toHaveBeenCalledTimes(1);
  });

  it('should call the discount calculate method when calculating total with discount', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockCalculateSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockCalculateSpy).toHaveBeenCalledWith(sut.total());
  });
});
