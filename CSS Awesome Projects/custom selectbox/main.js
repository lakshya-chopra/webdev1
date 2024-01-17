const selectBox = document.querySelector('.select-box')
const selected = document.querySelector('.selected')

const optionsContainer = document.querySelector('.options-container')

const optionsList = document.querySelectorAll('.option')

selected.addEventListener('click', () => {
    selectBox.classList.toggle("active2")
    optionsContainer.classList.toggle("active")
})

optionsList.forEach(o => {
    o.addEventListener('click', () => {
        selected.innerHTML = o.querySelector("label").innerHTML
        optionsContainer.classList.remove("active")
        selectBox.classList.remove("active2")
    })
})