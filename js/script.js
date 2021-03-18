
// Funzione "picker" genera dei numeri casuali in base al grado di difficoltá
// "numPicked" é il numero di bombe, "limitArr" é la length massima di arrayBot

function picker(numPicked, limitArr){
    
    var array = [];

    while (array.length < numPicked){
        
        var numRandom = Math.floor(Math.random() * limitArr + 1);
        
        if (!array.includes(numRandom)){
            
            array.push(numRandom);
        }
    }
    
    return array;
}

// Funzione "userNumbers" chiede all'utente i numeri da inserire
// "limit" equivale al livello di difficoltá, imposta la lunghezza di arrayUser

function userNumbers(limit){
    
    var difference = limit - arrayBot.length;
    var array = [];
    
    while (array.length < difference){
        
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

// "getLevel" chiede all'utente il livello di difficoltá

function getLevel(){

    var level = parseInt(prompt('Seleziona la difficoltá'));

    switch (level) {

        case 0: var range = 100;
            break;

        case 1: var range = 80;
            break;

        case 2: var range = 20;
            break;
    }

    return range
}


document.getElementById('button').addEventListener('click', function(){
    
    // level = parseInt(prompt('Seleziona la difficoltá'));

    var range = getLevel()

    arrayBot = picker(16, range);
    console.log('Array Bot: ' + arrayBot);
    
    arrayUser = userNumbers(range);
    console.log('Hai totalizzato: ' + (arrayUser.length) + ' punti');

})
