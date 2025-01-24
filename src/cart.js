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
  

function calculateTotalTTC(panier) {
if (!Array.isArray(panier) || panier.length === 0) {
    return 0;
}

return parseFloat(
    panier
    .map(item => {
        const prixTTCUnitaire = applyTax(item);
        return prixTTCUnitaire * item.quantité;
    })
    .reduce((total, prixTTC) => total + prixTTC, 0)
    .toFixed(2)
);
}

module.exports = { applyTax, calculateTotalTTC };