/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById("inp");
const convertBtn = document.getElementById("convert-btn");
const lengthRes = document.getElementById("len-metric");
const volumeRes = document.getElementById("vol-metric");
const massRes = document.getElementById("mass-metric");
convertBtn.addEventListener("click", function () {
  let inputVal = Number(input.value);
  if (inputVal === 0) {
    lengthRes.textContent = `0 meters = 0 feet | 0 feet = 0 meters`;
    volumeRes.textContent = `0 liters = 0 gallons | 0 gallons = 0 liters`;
    massRes.textContent = `0 kilos = 0 pounds | 0 pounds = 0 kilos`;
  } else {
    lengthRes.textContent = `${inputVal} meters = ${(inputVal * 3.281).toFixed(3)} feet | ${inputVal} feet = ${(inputVal / 3.281).toFixed(3)} meters`;
    volumeRes.textContent = `${inputVal} liters = ${(inputVal * 0.264).toFixed(3)} gallons | ${inputVal} gallons = ${(inputVal / 0.264).toFixed(3)} liters`;
    massRes.textContent = `${inputVal} kilos = ${(inputVal * 2.204).toFixed(3)} pounds | ${inputVal} pounds = ${(inputVal / 2.204).toFixed(3)} kilos`;
  }
});
