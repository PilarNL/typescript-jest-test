import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return undefined', () => {
    //System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log with the correct message', () => {
    //System under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso.');
  });

  it('should call console.log once', () => {
    //System under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
