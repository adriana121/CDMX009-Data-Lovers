// importamos la función `example`
import { typePoison } from '../src/data';

describe('funcion que filtra por tipo de pokemon', () => {

  it('obtinene los elementos de type poison', () => {
    expect(typePoison).toBe(Object);
  });
});
