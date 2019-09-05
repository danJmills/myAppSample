//attack buttons
let weakAttack = document.getElementById('weak')
let strongAttack = document.getElementById('strong')
let enemyAttack = 3
//health numbers
let playerHealth = 20
let enemyHealth = 10
//player health display
let playerUI = document.getElementById('player-hp')
playerUI.textContent = `HP: ${playerHealth}`
//enemy health display
let enemyUI = document.getElementById('enemy-hp')
enemyUI.textContent = `HP: ${enemyHealth}`

//players turn
let turn = 'player';
//let player choose one attack
if (turn === 'player') {
    weakAttack.addEventListener('click', function () {
        enemyHealth -= 3
        enemyUI.textContent = `HP: ${enemyHealth}`
        //after attack, it is enemies turn
        turn = 'enemy'
        //during enemies turn, player ui is disabled
        weakAttack.disabled = true;
        strongAttack.disabled = true;
        console.log(turn)
    })
    strongAttack.addEventListener('click', function () {
        enemyHealth -= 6
        enemyUI.textContent = `HP: ${enemyHealth}`
        //after attack, it is enemies turn
        turn = 'enemy'
        //during enemies turn, player ui is disabled
        weakAttack.disabled = true;
        strongAttack.disabled = true;
        console.log(turn)
    })
}

//enemy attack
if (turn === 'enemy') {
    playerHealth -= enemyAttack
    playerUI.textContent = `HP: ${playerHealth}`
    //after enemy attack, it is players turn
    turn = 'player'
    weakAttack.disabled = false;
    strongAttack.disabled = false;
    console.log(turn)
}


//message on who attacked and whose turn it is
let message = document.getElementById('message')
if (turn === 'enemy') {
    message.textContent = `Enemy's Turn`
} else {
    message.textContent = `Player's Turn`
}

