const { calculateTotalTTC, applyTax } = require('../src/cart');

describe('applyTax', () => {
  
  it("doit appliquer un taux de TVA de 5.5% pour un produit de catégorie 'livres'", () => {
    const livre = { id: 1, nom: 'Harry Potter', prix: 12.99, catégorie: 'livres' };
    const prixTTC = applyTax(livre);
    expect(prixTTC).toEqual(13.7);
  });

  it("doit appliquer un taux de TVA de 10% pour un produit de catégorie 'dvd'", () => {
    const dvd = { id: 2, nom: 'Inception', prix: 14.99, catégorie: 'dvd' };
    const prixTTC = applyTax(dvd);
    expect(prixTTC).toEqual(16.49);
  });

  it("doit appliquer un taux de TVA de 20% pour un produit de catégorie 'jeux vidéo'", () => {
    const jeu = { id: 3, nom: 'The Witcher 3', prix: 39.99, catégorie: 'jeux vidéo' };
    const prixTTC = applyTax(jeu);
    expect(prixTTC).toEqual(47.99);
  });

  it("doit lancer une erreur pour une catégorie inconnue", () => {
    const inconnu = { id: 4, nom: 'Produit Mystère', prix: 20, catégorie: 'inconnu' };
    expect(() => applyTax(inconnu)).toThrow('Catégorie inconnue');
  });

  it("doit arrondir le prix TTC à deux décimales", () => {
    const produit = { id: 5, nom: 'Produit Précis', prix: 19.999, catégorie: 'dvd' };
    const prixTTC = applyTax(produit);
    expect(prixTTC).toEqual(22); 
  });


  it("doit calculer le prix TTC pour une liste de produits avec différentes catégories", () => {
    const produits = [
      { id: 1, nom: 'Harry Potter', prix: 12.99, catégorie: 'livres' },
      { id: 2, nom: 'Inception', prix: 14.99, catégorie: 'dvd' },
      { id: 3, nom: 'The Witcher 3', prix: 39.99, catégorie: 'jeux vidéo' },
    ];
    const prixTTC = produits.map(applyTax);
    expect(prixTTC).toEqual([13.7, 16.49, 47.99]); 
  });

});

describe('calculateTotalTTC', () => {
  
    it('doit calculer le total TTC pour un panier avec plusieurs produits', () => {
      const panier = [
        { id: 1, nom: 'Harry Potter', prix: 12.99, catégorie: 'livres', quantité: 2 },
        { id: 2, nom: 'Inception', prix: 14.99, catégorie: 'dvd', quantité: 1 },
        { id: 3, nom: 'The Witcher 3', prix: 39.99, catégorie: 'jeux vidéo', quantité: 1 },
      ];
      const totalTTC = calculateTotalTTC(panier);
      expect(totalTTC).toEqual(105.88); 
    });
  
    it('doit calculer le total TTC en fonction des quantités des produits', () => {
      const panier = [
        { id: 1, nom: 'Harry Potter', prix: 12.99, catégorie: 'livres', quantité: 3 },
        { id: 2, nom: 'Inception', prix: 14.99, catégorie: 'dvd', quantité: 2 },
      ];
      const totalTTC = calculateTotalTTC(panier);
      expect(totalTTC).toEqual(88.07); 
    });
  
    it('doit retourner 0 si le panier est vide', () => {
      const panier = [];
      const totalTTC = calculateTotalTTC(panier);
      expect(totalTTC).toEqual(0);
    });
  
  });