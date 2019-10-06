var pw = [];
var pwLen = prompt('What is your password length? Must be 8-128 characters.');
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+'];
var isSymbols = true;
var isNumbers = true;

// randomize an array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// defined function to generate password
function createPassword() {
    //conditional statement: pwLen maximum 128 characters
    if (pwLen > 128) {
        pwLen = prompt('Invalid: Exceeds maximum 128 characters. Choose password length 8-128 characters');
        createPassword();
    }
    //conditional statement: pwLen minimum 8 characters
    else if (pwLen < 8) {
        pwLen = prompt('Invalid: Must be at least 8 characters. Choose password length 8-128 characters');
        createPassword();
    }

    for (i = 0; i < pwLen; i++) {
        //if symbols
        if (isSymbols == true && i == 0) {
            var randomSymNo = Math.floor(Math.random() * symbols.length);
            //inject symbol in string
            pw.push(symbols[randomSymNo]);
        }

        // else/if numbers 
        else if (isNumbers == true && i == 0) {
            var randomNum = Math.floor(Math.random() * numbers.length);
            pw.push(numbers[randomNum]);
        }

        //else letters
        else {
            //inject a letter into string
            var randomNo = Math.floor(Math.random() * letters.length);
            pw.push(letters[randomNo]);
        }
    }

    pwShuffle = shuffle(pw);
    pwBox.innerHTML = pwShuffle.toString();
};

// first event
