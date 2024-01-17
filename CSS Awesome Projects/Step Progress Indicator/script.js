const previousBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

previousBtn.disabled = true

const bullets = [...document.querySelectorAll('.bullet')]
console.log(bullets);

let currentStep = 0; //meaning no step has been covered

nextBtn.addEventListener('click', () => {
    const currentBullet = bullets[currentStep]

    if (currentStep < bullets.length - 1) { //if current step is less than the index of the last step.
        currentBullet.classList.add('done')
        currentStep++
        previousBtn.disabled = false
    }
    else {
        currentBullet.classList.add('lastStep') //we are adding a different class to the last step that doesn't have an arrow afterwards 
        currentStep++ //here currentStep would be equal to 4(indicating that we are on 4th step)
        nextBtn.disabled = true;
    }

})
previousBtn.addEventListener('click', () => {
    const currentBullet = bullets[currentStep - 1]

    if (currentStep - 1 == 3) { //if currentStep - 1 is equal to the 3, then remove the following class from the element at index 3 of bullets array(basically the last element).
        currentBullet.classList.remove('lastStep')
        currentStep--
        nextBtn.disabled = false;
    }
    else if (currentStep - 1 > 0) {
        currentBullet.classList.remove('done')
        currentStep--
    } else if (currentStep - 1 == 0) {
        currentBullet.classList.remove('done')
        currentStep = 0 //currentStep resets to 0(if we reach the first index)
        previousBtn.disabled = true
    }
})