var pw = [];
var letters = ['a', 'b', 'c', 'd', 'e', 'f'];
var numbers = ['1', '2', '3', '4', '5'];
var symbols = ['!', '@', '#', '$'];
var pwLen = prompt('what is your pw length? Must be between 8 and 128 characters.');
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

//define function
function createPassword() {
    var pw = [];
    if (pwLen > 128) {
        pwLen = prompt('Your password is greater than maximum 128 characters. Choose another password length');
        createPassword();
    };

    for (i = 0; i < pwLen; i++) {

        // if/else symbols
        if (isSymbols == true && i == 0) {
            var randomSymNo = Math.floor(Math.random() * symbols.length);

            // inject a symbol in the string
            // option 1
            // pw = pw + symbols[randomSymNo];

            // option 2
            pw.push(symbols[randomSymNo]);
        }

        // else/if numbers 
        else if (isNumbers == true && i == 0) {
            var randomNum = Math.floor(Math.random() * numbers.length);
            pw.push(numbers[randomNum]);
        }

        // else letters
        else {
            var randomNo = Math.floor(Math.random() * letters.length);
            // option 1
            pw.push(letters[randomNo]);

            // option 2
            // pw = pw + letters[randomNo];
        }

        pwShuffle = shuffle(pw);
        pwBox.innerHTML = pwShuffle.toString();
    }
};

//first event
genBtn.addEventListener('click', showAlert);
//change this password into a dynamic random pw
//document.write(pw);