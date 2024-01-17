const date = new Date()
const dateElems = Array.from(document.querySelectorAll('.date'))
const monthDisplay = document.querySelector('.month-display')
const lastDate = document.querySelector('.last-date')

const completeDate = document.querySelector('.complete-date')


const some_dates = dateElems.slice(28, dateElems.length)
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let year = 2021
let month = date.getMonth()
let todaySDate = date.getDate()

let newDate;

let todaySDateElem;

function marksTodaySDate(dateToday) {
    dateElems.forEach(dateElem => {

        dateElem.addEventListener('click', () => {

            setNewTodaysDate(dateElem)

        })

        if (dateElem.textContent == dateToday) {
            todaySDateElem = dateElem
            dateElem.classList.add('todays-date')
            return 0;
        }
    })
}

function setNewTodaysDate(elem) {
    todaySDate = parseInt(elem.textContent)
    todaySDateElem.classList.remove('todays-date')

    elem.classList.add('todays-date')

    todaySDateElem = elem

    setNewDate()
}

function prevMonth() {
    month = month - 1

    if (month === -1) {
        month = 11 //december
        year -= 1
    }

    let prevMonth = months[month]

    monthDisplay.textContent = prevMonth


    setLastDateDisabled()
    setNewDate()

}
function nextMonth() {
    month = month + 1
    if (month === 12) {
        month = 0
        year += 1
    }

    newDate = new Date(`${months[month]} ${todaySDate}   }${year}`)

    let nextMonth = months[month]

    monthDisplay.textContent = nextMonth

    setLastDateDisabled()
    setNewDate()

}
function setLastDateDisabled() {

    days = getNumOfDays(year, month + 1)


    if(days === 28) {
        some_dates.forEach(date => {
            date.classList.add('disabled')
            setDisabled(date)
        })
        return
    }
    else if (days === 29) {
        some_dates.forEach(date => {
            if (parseInt(date.textContent) === 29) {
            
            } else {
                date.classList.add('disabled')
                setDisabled(date)

            }
        })
        return
        
    } else {
        some_dates.forEach(date => {
            date.classList.remove('disabled')
            date.setAttribute('disabled','')
        })
    }

    if (days === 31) {
        lastDate.classList.remove('disabled')
        lastDate.setAttribute('disabled','')
    }
    else {
        lastDate.classList.add('disabled')
        setDisabled(lastDate)
    }

}
function setDisabled(elem) {
    elem.setAttribute('disabled','true')
}

function getNumOfDays(year, month) {
    return new Date(year, month, 0).getDate() //Gets the day-of-the-month
}

function setNewDate() {
    newDate = new Date(`${months[month]} ${todaySDate} ${year}`)

    setCompleteDate(newDate)

}

function setCompleteDate(newDate) {
    completeDate.textContent = newDate.toString().substring(0, 16)
}

function getNewYear() {
    year = parseInt(prompt('Enter the year whose calendar you wanna see: '))

    setNewDate()

}

setLastDateDisabled()
marksTodaySDate(todaySDate)
setCompleteDate(date)