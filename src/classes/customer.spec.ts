import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
) => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string) => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('IndividualCustomer', () => {
  it('should have first name, last name, and CPF', () => {
    //System under test
    const sut = createIndividualCustomer('John', 'Doe', '123.456.789-00');
    expect(sut).toHaveProperty('firstName', 'John');
    expect(sut).toHaveProperty('lastName', 'Doe');
    expect(sut).toHaveProperty('cpf', '123.456.789-00');
  });

  it('should have methods to get name and idn for individual customers', () => {
    //System under test
    const sut = createIndividualCustomer('John', 'Doe', '123.456.789-00');
    expect(sut.getName()).toBe('John Doe');
    expect(sut.getIDN()).toBe('123.456.789-00');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and CNPJ', () => {
    //System under test
    const sut = createEnterpriseCustomer('Acme INC.', '11.270.849/0001-00');
    expect(sut).toHaveProperty('name', 'Acme INC.');
    expect(sut).toHaveProperty('cnpj', '11.270.849/0001-00');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    //System under test
    const sut = createEnterpriseCustomer('Acme INC.', '11.270.849/0001-00');
    expect(sut.getName()).toBe('Acme INC.');
    expect(sut.getIDN()).toBe('11.270.849/0001-00');
  });
});
