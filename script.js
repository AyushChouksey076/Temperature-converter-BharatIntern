function convert() {
    var temperature = document.getElementById('temperature').value
    var conversionOption = document.getElementById('conversionOption').value
    if (temperature) {
      var result
      if (conversionOption === 'celsiusToFahrenheit') {
        result = (temperature * 9) / 5 + 32
        document.getElementById('result').innerHTML =
          temperature + ' Cel = ' + result.toFixed(2) + ' Fah'
      } else if (conversionOption === 'fahrenheitToCelsius') {
        result = ((temperature - 32) * 5) / 9
        document.getElementById('result').innerHTML =
          temperature + ' Fah = ' + result.toFixed(2) + ' Cel'
      } else if (conversionOption === 'celsiusToKelvin') {
        result = parseFloat(temperature) + 273.15
        document.getElementById('result').innerHTML =
          temperature + ' Cel = ' + result.toFixed(2) + ' Kel'
      } else if (conversionOption === 'kelvinToCelsius') {
        result = parseFloat(temperature) - 273.15
        document.getElementById('result').innerHTML =
          temperature + ' Kel = ' + result.toFixed(2) + ' Cel'
      } else if (conversionOption === 'fahrenheitToKelvin') {
        result = ((parseFloat(temperature) - 32) * 5) / 9 + 273.15
        document.getElementById('result').innerHTML =
          temperature + ' Fah = ' + result.toFixed(2) + ' Kel'
      } else if (conversionOption === 'kelvinToFahrenheit') {
        result = ((parseFloat(temperature) - 273.15) * 9) / 5 + 32
        document.getElementById('result').innerHTML =
          temperature + ' Kel = ' + result.toFixed(2) + ' Fah'
      } else {
        document.getElementById('result').innerHTML =
          'Please enter a temperature value.'
      }
    }
  }