const convertBtn = document.getElementById('convert-btn')
const inputEl = document.getElementById('input-el')
const currentValueEls = document.querySelectorAll('.current-value')
let currentValue = 1

const feetEl = document.getElementById('toFeet')
const metersEl = document.getElementById('toMeters')
const gallonsEl = document.getElementById('toGallons')
const litersEl = document.getElementById('toLiters')
const poundsEl = document.getElementById('toPounds')
const kilosEl = document.getElementById('toKilos')

let resultFeet
let resultMeters
let resultGallons
let resultLiters
let resultPounds
let resultKilos

function calculate() {
    currentValue = inputEl.value
    resultFeet = currentValue * 3.281
    resultMeters = currentValue * 0.3048
    resultGallons = currentValue * 0.264
    resultLiters = currentValue * 3.785
    resultPounds = currentValue * 2.204
    resultKilos = currentValue * 0.453
}

function render() {
    for(let i=0; i < currentValueEls.length; i++) {
        currentValueEls[i].textContent = inputEl.value
    }
    calculate()
    feetEl.textContent = resultFeet.toFixed(3)
    metersEl.textContent = resultMeters.toFixed(3)
    gallonsEl.textContent = resultGallons.toFixed(3)
    litersEl.textContent = resultLiters.toFixed(3)
    poundsEl.textContent = resultPounds.toFixed(3)
    kilosEl.textContent = resultKilos.toFixed(3)
}
render()

convertBtn.addEventListener('click', render)