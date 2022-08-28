/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("value")
let convertBtn = document.getElementById("conv-btn")
let lenUnit = document.getElementById("lenUnit")
let volUnit = document.getElementById("volUnit")
let massUnit = documnet.getElementById("massUnit")

convertBtn.addEventListener("click", function() {
  render()
})

function render() {
  const length = 3.281
  const volume = 0.264
  const mass = 2.204
  let inputNum = Number(inputEl.value)
  
  // lenUnit.textContent = ""
  // volUnit.textContent = ""
  // massUnit.textContent = ""
  
  lenUnit.innerHTML = `${inputNum} meters = ${(inputNum * length).toFixed(3)} feet | ${inputNum} feet = ${(inputNum / length).toFixed(3)} meters`
  
  volUnit.innerHTML = `${inputNum} liters = ${(inputNum * volume).toFixed(3)} gallons | ${inputNum} gallons = ${(inputNum / volume).toFixed(3)} liters`
  
  massUnit.innerHTML = `${inputNum} kilos = ${(inputNum * mass).toFixed(3)} pounds | ${inputNum} pounds = ${(inputNum / mass).toFixed(3)} kilos`
}