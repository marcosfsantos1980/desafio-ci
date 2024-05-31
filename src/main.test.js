const somar = require('./main.js');

test('a soma  de 2+2 é 4',()=>{
    expect(somar(2,2)).toBe(4)
}); 