const { tab, element } = require('./data.js');
const searchElement = require('./searchElement.js');

searchElement(tab, element, (error, position) => {
    if (error) {
        console.log("Erreur:", error);
    } else {
        console.log(`L'élément ${element} a été trouvé à la position ${position}`);
    }
});

const elementNonExistant = 10;
searchElement(tab, elementNonExistant, (error, position) => {
    if (error) {
        console.log("Erreur:", error);
    } else {
        console.log(`L'élément ${elementNonExistant} a été trouvé à la position ${position}`);
    }
});