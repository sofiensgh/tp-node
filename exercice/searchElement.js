
function searchElement(tab, element, callback) {
    const index = tab.indexOf(element);
    
    if (index !== -1) {
        callback(null, index); 
    } else {
        callback(`L'élément ${element} n'existe pas dans le tableau`, null); // Erreur
    }
}

module.exports = searchElement;