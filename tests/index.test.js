test('Testa se o REGEX está sendo bem aplicado', () =>{
    const email = 'izielucas2016@gmail.com'
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    expect(email).toMatch(regex)
})