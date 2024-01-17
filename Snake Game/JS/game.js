import {update} from './snake.js'
import {gameSpecificConstants} from './variables_constants.js'


let lastRenderTime = 0
const SNAKE_SPEED = 7

export let inputDir = { x: 0, y: 0 }

window.addEventListener('load', update())

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
    gameSpecificConstants.moveSound.play()
    

})

function gameLoop(ctime) {
    window.requestAnimationFrame(gameLoop)
    if (((ctime - lastRenderTime) / 1000) < 1 / SNAKE_SPEED){
        return
    } //there should be a diff. of 0.5 seconds in each frame.
    lastRenderTime = ctime
    update()

}
window.requestAnimationFrame(gameLoop)

//if we haven't pressed any key, then inputDir will be {x:0,y:0} and therefore it wont move.