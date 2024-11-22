//1. Decideix si un número és múltiple de 3 o de 7
function esMultiple(numero) {
    if (numero % 3 === 0 && numero % 7 === 0) {
        console.log(`${numero} és múltiple de 3 i de 7.`);
    } else if (numero % 3 === 0) {
        console.log(`${numero} és múltiple de 3.`);
    } else if (numero % 7 === 0) {
        console.log(`${numero} és múltiple de 7.`);
    } else {
        console.log(`${numero} no és múltiple de 3 ni de 7.`);
    }
}
esMultiple(21); // Prova amb un número
