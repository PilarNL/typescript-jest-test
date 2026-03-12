import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return undefined', () => {
    //System under test
    const sut = createSut();
    expect(sut.sendMessage('Test message')).toBeUndefined();
  });

  it('should call console.log with the correct message', () => {
    //System under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Test message');
    expect(consoleSpy).toHaveBeenCalledWith(
      'Mensagem enviada:',
      'Test message',
    );
  });

  it('should call console.log once', () => {
    //System under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Test message');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
