var arrayOrdered = [];
var arrayShuffled = [];

// array che contiene tutti i numeri da 1 a 100
for (var i = 1; i <= 100; i++){
    arrayOrdered.push(i)
}

console.log('Array ordinato: ' + arrayOrdered);

var n = arrayOrdered.length;

while (n && arrayShuffled.length < 16){

    // creazione di un indice a caso
    var randomNum = Math.floor(Math.random() * arrayOrdered.length);

    // se il numero che corrisponde a quell'indice si trova in array lo pusho in arrayShuffled
    if (randomNum in arrayOrdered){

        arrayShuffled.push(arrayOrdered[randomNum]);
        delete arrayOrdered[randomNum];
        n--;
    }

}

console.log('Array mescolato: ' + arrayShuffled, arrayShuffled.length);