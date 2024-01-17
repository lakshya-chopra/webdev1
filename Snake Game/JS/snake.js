import { gameSpecificConstants } from "./variables_constants.js"
import {inputDir} from "./game.js"

let snakeArr = [{ x: 5, y: 5 }]  //snake head,snake is an array but food is not.
let food = { x: 12, y: 12 }

let a = 2
let b = 14

let score = 0
let scoreElem = document.querySelector('#heading')

let scoreArr = []

function isCollide(snake) {
        // If you bump into the wall
        if(snake[0].x >= 15 || snake[0].x <=0 || snake[0].y >= 15 || snake[0].y <=0){
            return true;
        } else {
            return false
        }
}

export function update() {
    /*updating the snake array*/

    if (isCollide(snakeArr)) {
        inputDir.x = 0
        inputDir.y = 0
        snakeArr = [{ x: 5, y: 5 }]
        storeScore(score)
        score = 0
        scoreElem.innerHTML = "Score: 0"  //we have to first do this otherwise the next time update will be called then also it will return true for collide, we cant write these statements after the alert, because then it will occupy the main thread and  even if we click ok, requestAnimationFrame() would keep on working and snake's position would remain the same as wall's position and alert and music will never stop playing.
        gameSpecificConstants.gameOverSound.play()
        alert('Game Over!')
        
        

        plotSnake()
    }
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        gameSpecificConstants.eatSound.play()
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y })
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        score++
        scoreElem.innerHTML = `Score: ${score}`
        plotSnake()
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] }  // {i+1} bottomMost part of snake, we will basically set all the end parts of snake equal to its next parts and simultaneously move the head.

        //see code with harry's video for explanation
    }
    snakeArr[0].x += inputDir.x
    snakeArr[0].y += inputDir.y

    plotSnake()


    let foodElem = document.createElement('div')
    foodElem.classList.add('food')
    foodElem.style.gridRowStart = food.y
    foodElem.style.gridColumnStart = food.x

    gameSpecificConstants.gameBoard.appendChild(foodElem)

}

function plotSnake() {
    gameSpecificConstants.gameBoard.innerHTML = ""
    snakeArr.forEach((e) => {
        let snakeElem = document.createElement('div')
        snakeElem.classList.add('snake')
        snakeElem.style.gridRowStart = e.y
        snakeElem.style.gridColumnStart = e.x

        gameSpecificConstants.gameBoard.appendChild(snakeElem)
    })
}

function storeScore(score) {
    let localStorageData = localStorage.getItem('Scores')
    if (localStorageData === null) {
        scoreArr = []
    } else {
        scoreArr = JSON.parse(localStorageData)
    }
    scoreArr.push(score)
    localStorage.setItem('Scores',JSON.stringify(scoreArr))
}