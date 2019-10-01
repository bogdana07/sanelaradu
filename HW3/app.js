var pw = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f'];
var numbers = ['1', '2', '3', '4', '5'];
var symbols = ['!', '@', '#', '$'];
var pwLen = prompt('what is your pw length? Must be between 8 and 128 characters.');
var isSymbols = true;
var isNumbers = true;

//define function
function showAlert() {
    for (i = 0; i < pwLen; i++) {

        // symbols if/else statement
        if (isSymbols == true && i == 0) {

            var randomSymNo = Math.floor(Math.random() * letters.length);
            // inject a symbol in the string
            // option 1
            // pw = pw + symbols[randomSymNo];

            // option 2
            pw.push(symbols[randomSymNo]);
        }

        // numbers else/if statement
        else if (isNumbers == true && i == 0) {
            var randomNum = Math.floor(Math.random() * numbers.length);
            pw = pw + numbers[randomNo];
        }

        // else result a letter
        else {
            // inject a letter into the string
            var randomNo = Math.floor(Math.random() * letters.length);
            // option 1
            // pw.push(letters[randomNo]);

            // option 2
            pw = pw + letters[randomNo];
        }

        pwBox.innerHTML = pw;
    }

    //first event
    genBtn.addEventListener('click', showAlert);
//change this password into a dynamic random pw
//document.write(pw);