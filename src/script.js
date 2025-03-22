function countVowels() {
  var inputString = document.getElementById('inputString').value.toLowerCase();
  var vowelCount = 0;
  

 for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] == 'a' || inputString[i] == 'e' || inputString[i] == 'i' || inputString[i] == 'o' || inputString[i] == 'u') {
      vowelCount++;
    }
  }
  
  document.getElementById('vowelCount').innerHTML = "Número de vogais na frase: " + vowelCount;
}
