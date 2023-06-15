const heroes = [
  {
    name: 'Slate Slabrock',
    type: 'dwarf',
    damage: 5,
    health: 100,
    maxHealth: 100,
    isAlive: true
  },
  {
    name: 'Flint Ironstag',
    type: 'elf',
    damage: 10,
    health: 50,
    maxHealth: 50,
    isAlive: true
  }
]


const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}
let gold = 0


// create a function that will damage the boss on click
// creates a function where the boss damages the heroes.
// 
function damageBoss() {

  let damageTotal = 0
  heroes.forEach(hero => {
    if (hero.isAlive == true) {
      damageTotal += hero.damage
    }
  })
  // console.log(damageTotal)
  boss.health -= damageTotal
  // console.log(boss.health)
  bossDefeated()
  drawBoss()
}

function damageHeroes() {

  heroes.forEach(hero => {
    if (boss.damage > hero.health) {
      hero.health = 0
    }
    if (hero.health <= 0) {
      hero.isAlive = false
    } else {
      hero.health -= boss.damage * boss.level

    }
  })



  // heroes.forEach(hero => console.log(hero.health))
  playersLose()
  drawPlayers()
}




// let intervalTimer = setInterval(damageHeroes, 1000)
// setInterval(damageHeroes, 5000)

// 
//create a function for when the boss's health = 0
function bossDefeated() {
  if (boss.health <= 0) {
    boss.level += 1
    boss.maxHealth += 20
    boss.health = boss.maxHealth
    console.log(boss.maxHealth)
    gold += 50
    // console.log(gold)
    drawGold()
  }
}
function playersLose() {

  let losers = heroes.every(hero => hero.isAlive == false)
  if (losers) {
    window.alert('everyone died! you lose!')
    reset()

  }
}
function start() {
  let intervalTimer = setInterval(damageHeroes, 5000)
  document.getElementById('Start').hidden = true;
  // document.getElementById('Start').addEventListener("click", () => {

  // },
  //   false);

}

// SECTION shop functions
// will need to reference the amount of gold the player has
// will need to add to player's health bar
// add new player? stretch goal?
function purchase(cost) {
  if (gold >= cost) {
    gold -= cost
    return
  }
  window.alert('you dont have enough gold!')
  return
}
//  when function is invoked, heal the players health by 50
function potionEffect() {
  heroes.forEach(hero => {
    hero.health += 50
  })
  drawPlayers()
}

function reset() {
  heroes.forEach(hero => hero.health = hero.maxHealth)
  heroes.forEach(hero => hero.isAlive = true)
  boss.level = 1
  boss.maxHealth = 100
  boss.health = boss.maxHealth
  gold = 0
  clearInterval(intervalTimer)
  intervalTimer = setInterval(damageHeroes, 5000)
  drawBoss()
  drawPlayers()
}


// draws boss to the page
function drawBoss() {


  let stringForBossHP = document.getElementById('HP')
  stringForBossHP.innerText = boss.health

}
function drawPlayers() {
  heroes.forEach(hero => {
    let stringForHeroHP = document.getElementById(hero.name)
    stringForHeroHP.innerText = hero.health
  })

}
function drawGold() {
  let stringForGold = document.getElementById('gold')
  stringForGold.innerText = gold
}








drawPlayers()