const hash = require('./testindex');

test('Verificar Hash', () => {
  const mensaje = 'contraseña';
  const hashtest = hash(mensaje);
  expect(hashtest).toBe('edf9cf90718610ee7de53c0dcc250739239044de9ba115bb0ca6026c3e4958a5');
});
