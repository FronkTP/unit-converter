/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

meterFeetConversionRate = 3.281
literGallonConversionRate = 0.264
kilogramPoundConversionRate = 2.204

const lengthConversion = document.getElementById("length-conversion")
const volumeConversion = document.getElementById("volume-conversion")
const massConversion = document.getElementById("mass-conversion")

function convert() {
    let inputValue = parseFloat(document.getElementById("input-value").value)

    if (isNaN(inputValue)) {
        alert("Please enter a valid number");
        return;
    }

    let meterToFeet = (inputValue * meterFeetConversionRate).toFixed(3)
    let feetToMeter = (inputValue / meterFeetConversionRate).toFixed(3)
    let literToGallon = (inputValue * literGallonConversionRate).toFixed(3)
    let gallonToLiter = (inputValue / literGallonConversionRate).toFixed(3)
    let kilogramToPound = (inputValue * kilogramPoundConversionRate).toFixed(3)
    let poundToKilogram = (inputValue / kilogramPoundConversionRate).toFixed(3)

    lengthConversion.innerText = `${inputValue} meters = ${meterToFeet} feet | ${inputValue} feet = ${feetToMeter} meters`
    volumeConversion.innerText = `${inputValue} liters = ${literToGallon} gallons | ${inputValue} gallons = ${gallonToLiter} liters`
    massConversion.innerText = `${inputValue} kilos = ${kilogramToPound} pounds | ${inputValue} pounds = ${poundToKilogram} kilos`
}