const hash = require('./testindex');

test('Verificar Hash', () => {
  const mensaje = 'contraseña';
  const hashtest = hash(mensaje);
  expect(hashtest).toBe('edf9cf90718610ee7de53c0dcc250739239044de9ba115bb0ca6026c3e4958a5');
});
const index = require('./testindex');

test('Filter even numbers', () => {
    const message = "contraseña";
    const filteredNumbers = index(message);
    expect(filteredNumbers).toEqual("559a0612917c8c516c7980c38b376cf2bb2387ae1b6944b3b32245ff4f2bad4d5db3811f02cff394fb62fa3feefd03e2eb83ba7bcca72a912bb87ea609c424da");
});
