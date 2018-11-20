function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML = ((valNum - 32) / 1.8).toFixed(2);
    valNum2 = parseFloat((valNum - 32) / 1.8);
    document.getElementById("outputKelvin").innerHTML = (valNum2 + 273.15).toFixed(2);
}