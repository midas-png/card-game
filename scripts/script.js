const cards = document.querySelectorAll('.card')
const button = document.querySelector('.btn')
const mistakeValue = document.querySelector('.mistakesNumber')
const movesNumber = document.querySelector('.totalMovesNumber')

let isFlipped = false
let lockClick = false
let firstCard = null
let secondCard = null
let movesScore = 0
let mistakeScore = 0

button.addEventListener('click', refreshPage)

function flipOfCard(){
    if(lockClick){
        return
    }
    if (this === firstCard){
        return
    }
    this.classList.add('flip')
    if(!isFlipped){
        isFlipped = true
        firstCard = this
    } else {
        isFlipped = false
        secondCard = this
        checkIsMatch()
    }
}

function checkIsMatch(){
    if (firstCard.dataset.card === secondCard.dataset.card){
        disableCards()
    } else {
        removeFlip()
        mistakeScore++
        mistakeValue.innerHTML = mistakeScore
    }
    movesScore++
    movesNumber.innerHTML = movesScore
}

function disableCards(){
    firstCard.removeEventListener('click', flipOfCard)
    secondCard.removeEventListener('click', flipOfCard)
    logicToDefault()
}

function removeFlip(){
    lockClick = true
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        lockClick = false
        }, 1500)
}

function logicToDefault(){
    isFlipped = false
    lockClick = false
    firstCard = null
    secondCard = null
}

function refreshPage(){
    window.location.reload()
} 

cards.forEach(card => card.addEventListener('click', flipOfCard))