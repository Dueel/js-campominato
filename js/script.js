var level = parseInt(prompt('Seleziona la difficoltá'));


// Funzione "picker" genera dei numeri casuali in base al grado di difficoltá

function picker(numPicked, limit){
    
    var array = [];

    while (array.length != numPicked){

        var numRandom = Math.floor(Math.random() * limit + 1);

        if (!array.includes(numRandom)){
        
            array.push(numRandom);
        }
    }

    return array;
}

var arrayBot = picker(16, level);
console.log(arrayBot);


// Funzione "userNumbers" chiede all'utente il livello di difficoltá e i numeri da inserire

function userNumbers(limit){

    var difference = limit - arrayBot.length;
    var array = [];

    while (array.length != difference){

        var numUser = parseInt(prompt('Inserisci un numero tra 1 e ' + limit));

        console.log(numUser);

        if (!array.includes(numUser)){
            array.push(numUser);

        } else {
            alert('Hai giá inserito questo numero');

        }

        if (arrayBot.includes(numUser)){

            console.log('hai perso');
            break;
        }
    }

    return array
}

var arrayUser = userNumbers(level);
