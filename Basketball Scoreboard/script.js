let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let reset = document.getElementById("reset")
const resetBtn = document.getElementById("reset-btn")

let home = 0
let guest = 0

function inchome1() {
  home += 1
  homeScore.textContent = home
}

function inchome2() {
  home += 2
  homeScore.textContent = home
}

function inchome3() {
  home += 3
  homeScore.textContent = home
}

function incguest1() {
  guest += 1
  guestScore.textContent = guest
}

function incguest2() {
  guest += 2
  guestScore.textContent = guest
}

function incguest3() {
  guest += 3
  guestScore.textContent = guest
}

// function reset() {
//   home = 0
//   guest = 0
//   homeScore.textContent = home;
//   guestScore.textContent = guest;
// }

resetBtn.addEventListener("click", function(){
  homeScore.textContent = 0
  guestScore.textContent = 0
})