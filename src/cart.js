function applyTax(product) {
    const taxRates = {
      livres: 0.055,
      dvd: 0.1,
      'jeux vidéo': 0.2,
    };
  
    const taxRate = taxRates[product.catégorie];
  
    if (taxRate === undefined) {
      throw new Error('Catégorie inconnue');
    }
  
    return parseFloat((product.prix * (1 + taxRate)).toFixed(2));
  }
  
  module.exports = { applyTax };
