let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
  let randomFighter1 = Math.floor(Math.random() * fighters.length) + 1
  let randomFighter2 = Math.floor(Math.random() * fighters.length) + 1
  let fighter1 = fighters[randomFighter1]
  let fighter2 = fighters[randomFighter2]

  stageEl.innerText = fighter1 + "VS" + fighter2
})
