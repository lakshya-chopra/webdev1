const shareBtn = document.querySelector('.shareBtn')
const socialMediaBtns = document.querySelectorAll('.socialMediaBtn')

const fbBtn = document.querySelector('.fbBtn')
const instaBtn = document.querySelector('.instaBtn')
const twitterBtn = document.querySelector('.twitterBtn')

let buttonsOpen = false

shareBtn.addEventListener('click', () => {
    if (!buttonsOpen) {
        socialMediaBtns.forEach((element) => {
            element.style.visibility = "visible"
        })
        buttonTransform()
        buttonsOpen = true
    }
    else {
        socialMediaBtns.forEach((element) => {
            element.style.visibility = "hidden"
        })
        fbBtn.style.transform = ""
        instaBtn.style.transform = ""
        twitterBtn.style.transform = "" //to untransform the buttons
        buttonsOpen = false
    }
})

function buttonTransform() {
    fbBtn.style.transform = "translate(-90px,-60px)"
    instaBtn.style.transform = "translate(90px,-60px)"
    twitterBtn.style.transform = "translate(0,-110px)"
}