let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passLength = 16
let passwordOne = document.getElementById("password1")
let passwordTwo = document.getElementById("password2")

function passGen() {
  passGenOne()
  passGenTwo()
}

function passGenOne() {
  let pass1 = ""

  for (let i = 0; i < passLength; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length) + 1

    pass1 += characters[randomIndexOne]
  }
  passwordOne.innerText = pass1
}
function passGenTwo() {
  let pass2 = ""

  for (let i = 1; i < passLength; i++) {
    let randomIndexTwo = Math.floor(Math.random() * characters.length) + 1

    pass2 += characters[randomIndexTwo]
  }
  passwordTwo.innerText = pass2
}