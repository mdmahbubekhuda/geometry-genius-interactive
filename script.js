// get value function
function getInputValue(inputId) {
    const selectInput = document.querySelector(inputId)
    const numberValue = parseFloat(selectInput.value)
    selectInput.value = ''
    return numberValue
}
// set value function
function setInnerText(elementId, calcValue) {
    const selectElement = document.querySelector(elementId)
    selectElement.innerText = calcValue.toFixed(2)
}
// add element function
function addElement(titleId, areaValue) {
    // target element
    const getParent = document.getElementById('area-calculation')
    const getTitle = document.querySelector(titleId).innerText

    // created div and its child elements
    const elementCount = getParent.childElementCount
    const divElement = document.createElement('div')

    divElement.classList.add('text-lg', 'text-fuchsia-600')

    divElement.innerHTML = `
    <p> ${elementCount}. ${getTitle}-Area : ${areaValue.toFixed(2)} cm<sup>2</sup></p>
    <p id = "display-meter"></p>
    <button class= "btn-convert-meter btn btn-neutral btn-xs ml-4">Convert to Meter</button>`

    // append to area calculation
    getParent.appendChild(divElement)
}
// meter conversion function
function convertSqrCentiMeter(button) {
    const getSqrCm = button.parentNode.childNodes[1].innerText.split(' ')
    const sqrCm = parseFloat(getSqrCm[3])
    const sqrMeter = sqrCm / 10000
    return sqrMeter
}
// meter conversion
document.querySelector('#area-calculation').addEventListener('mouseover', function (event) {
    const buttons = document.querySelectorAll('.btn-convert-meter')
    for (const button of buttons) {
        button.addEventListener('click', function (event) {
            event.target.previousElementSibling.innerHTML = `Area: ${convertSqrCentiMeter(this)} m<sup>2</sup>`
            event.stopImmediatePropagation()
        })
    }
})

// triangle
document.querySelector('#btn-triangle').addEventListener('click', function () {
    // get value
    const base = getInputValue('#input-base')
    const height = getInputValue('#input-height')

    // calculation
    const calcValue = 0.5 * base * height

    // validation - NaN
    if (isNaN(calcValue) || base <= 0 || height <= 0) return alert('Please check your inputs, and try again...')

    // set result
    setInnerText('#result-triangle', calcValue)

    // add element - area calculation section
    addElement('#title-triangle', calcValue)

})
// rectangle
document.querySelector('#btn-rectangle').addEventListener('click', function () {
    // get value
    const width = getInputValue('#input-width')
    const length = getInputValue('#input-length')

    // calculation
    const calcValue = width * length

    // set result
    setInnerText('#result-rectangle', calcValue)

    // validation - NaN
    if (isNaN(calcValue) || width <= 0 || length <= 0) return alert('Please provide number')

    // add element 
    addElement('#title-rectangle', calcValue)
})
// parallelogram
document.querySelector('#btn-parallelogram').addEventListener('click', function () {
    // get value
    const base = getInputValue('#input-base-parallelogram')
    const height = getInputValue('#input-height-parallelogram')

    // calculation
    const calcValue = base * height

    // set result
    setInnerText('#result-parallelogram', calcValue)

    // validation - NaN
    if (isNaN(calcValue) || base <= 0 || height <= 0) return alert('Please provide number')

    // add element 
    addElement('#title-parallelogram', calcValue)
})
// rhombus
document.querySelector('#btn-rhombus').addEventListener('click', function () {
    // get value
    const d1 = getInputValue('#input-diagonal1-rhombus')
    const d2 = getInputValue('#input-diagonal2-rhombus')

    // calculation
    const calcValue = 0.5 * d1 * d2

    // set result
    setInnerText('#result-rhombus', calcValue)

    // validation - NaN
    if (isNaN(calcValue) || d1 <= 0 || d2 <= 0) return alert('Please provide number')

    // add element 
    addElement('#title-rhombus', calcValue)
})
// pentagon
document.querySelector('#btn-pentagon').addEventListener('click', function () {
    // get value
    const p = getInputValue('#input-perimeter-pentagon')
    const a = getInputValue('#input-apothem-pentagon')

    // calculation
    const calcValue = 0.5 * p * a

    // set result
    setInnerText('#result-pentagon', calcValue)

    // validation - NaN
    if (isNaN(calcValue) || p <= 0 || a <= 0) return alert('Please provide number')

    // add element 
    addElement('#title-pentagon', calcValue)
})
// ellipse
document.querySelector('#btn-ellipse').addEventListener('click', function () {
    // get value
    const a = getInputValue('#input-major-ellipse')
    const b = getInputValue('#input-minor-ellipse')

    // calculation
    const calcValue = Math.PI * a * b

    // set result
    setInnerText('#result-ellipse', calcValue)

    // validation - NaN
    if (isNaN(calcValue) || a <= 0 || b <= 0) return alert('Please provide number')

    // add element 
    addElement('#title-ellipse', calcValue)
})