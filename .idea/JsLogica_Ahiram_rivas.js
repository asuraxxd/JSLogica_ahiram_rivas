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

//2.- Donats dos enters (x, y), dir quins d’ells estan en el rang de 10 a 50 inclosos. Utilitza un
// operador ternari.

function dinsRang(x, y) {
    let xEstà = (x >= 10 && x <= 50) ? `${x} està en el rang` : `${x} no està en el rang`;
    let yEstà = (y >= 10 && y <= 50) ? `${y} està en el rang` : `${y} no està en el rang`;
    console.log(xEstà);
    console.log(yEstà);
}
dinsRang(25, 60); // Prova amb dos números

//3.- Donat un enter (x), mostra per pantalla la qualificació de l’examen:

function qualificacio(x) {
    if (x >= 0 && x <= 4.99) {
        console.log("Suspès");
    } else if (x >= 5 && x <= 5.99) {
        console.log("Suficient");
    } else if (x >= 6 && x <= 6.99) {
        console.log("Bé");
    } else if (x >= 7 && x <= 8.99) {
        console.log("Notable");
    } else if (x >= 9 && x <= 10) {
        console.log("Excel·lent");
    } else {
        console.log("Nota no vàlida");
    }
}
qualificacio(7.5); // Prova amb una nota



