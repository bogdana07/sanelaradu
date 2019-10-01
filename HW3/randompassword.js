//generate random password
function random_password_generate(max,min)
{
    var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return randPassword;
}

//call function with parameters to generate password
random_password_generate(128,8);

//code for button to generate pass when clicked
<input type="text" name="randomPassword" id="randomPassword">
<button id="generatePassword">Generate Password</button>
<script type="text/javascript">
function random_password_generate(max,min)
{
    var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return randPassword;
}
document.getElementById("generatePassword").addEventListener("click", function(){
    random_password = random_password_generate(16,8);
    document.getElementById("randomPassword").value = random_password;
});
</script>