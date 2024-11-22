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


//4.- Modifica l’exercici 1, perquè mostri el text: és múltiple de 3, de 7 o de 3 i 7 utilitzant un switch.

function multipleSwitch(numero) {
    let text = "";
    switch (true) {
        case numero % 3 === 0 && numero % 7 === 0:
            text = "És múltiple de 3 i de 7";
            break;
        case numero % 3 === 0:
            text = "És múltiple de 3";
            break;
        case numero % 7 === 0:
            text = "És múltiple de 7";
            break;
        default:
            text = "No és múltiple de 3 ni de 7";
    }
    console.log(text);
}
multipleSwitch(21); // Prova amb un número


//5.- Donat un enter (x), troba el màxim número n tal que 1+2+3+...+n <= x

function sumaMaxima(x) {
    let suma = 0, n = 0;
    while (suma + (n + 1) <= x) {
        n++;
        suma += n;
    }
    console.log(`El màxim n és ${n} (suma = ${suma})`);
}
sumaMaxima(15); // Prova amb un valor


//6.- Donat un String (x), sumar els caràcters que siguin números.

function sumaCaractersNumerics(x) {
    let suma = 0;
    for (let char of x) {
        if (!isNaN(char) && char !== ' ') {
            suma += parseInt(char);
        }
    }
    console.log(`La suma dels números és: ${suma}`);
}
sumaCaractersNumerics("123abc45"); // Prova amb un string


//7.- Donat tres enters, ordena de major a menor.

function ordenarTres(x, y, z) {
    let numeros = [x, y, z].sort((a, b) => b - a);
    console.log(`Ordenats: ${numeros}`);
}
ordenarTres(5, 1, 9); // Prova amb tres números

