const { applyTax } = require('../src/cart');

describe('applyTax', () => {
  it('should apply the correct tax rate based on product category', () => {
    const product1 = { id: 1, nom: 'Harry Potter', prix: 12.99, catégorie: 'livres' };
    const product2 = { id: 2, nom: 'Inception', prix: 14.99, catégorie: 'dvd' };
    const product3 = { id: 3, nom: 'The Witcher 3', prix: 39.99, catégorie: 'jeux vidéo' };

    expect(applyTax(product1)).toEqual(13.7);
    expect(applyTax(product2)).toEqual(16.49);
    expect(applyTax(product3)).toEqual(47.99);
  });

  it('should throw an error for an unknown category', () => {
    const product = { id: 4, nom: 'Unknown', prix: 20, catégorie: 'unknown' };
    expect(() => applyTax(product)).toThrow('Catégorie inconnue');
  });
});
