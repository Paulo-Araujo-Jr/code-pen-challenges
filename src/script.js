function convert() {
  var celsius = parseFloat(document.getElementById('celsius').value); 
  if (isNaN(celsius)) { 
    document.getElementById('fahrenheit').innerHTML = "Por favor, insira um número válido.";
    return;
  }
  

  var fahrenheit = celsius * 9/5 + 32
  
  document.getElementById('fahrenheit').innerHTML = "Temperatura em Fahrenheit: " + fahrenheit;
}
