const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

/*
* random combination
15 char total
1 function that creates pw
1 function that is executed on button click and lets it run 2 times --> stores and displays variables

*/
let output1El = document.getElementById("output1");
let output2El = document.getElementById("output2");

const passwordGenerator = () => {
    let password = "";
    for (let i = 0; i < 15; i++) {
        let ranNum = Math.floor(Math.random()* characters.length);
        password += characters[ranNum];
    }
    return password;
}

console.log(passwordGenerator());

const generatePasswords = () => {
    output1El.innerText = passwordGenerator();
    output2El.innerText = passwordGenerator();
}

