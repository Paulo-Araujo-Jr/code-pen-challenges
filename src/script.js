function calculateAverage() {
  var numbersInput = document.getElementById('numbersInput').value;
  var numbersArray = numbersInput.split(',').map(Number);
  var sum = 0;
  
    for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  
  var average = sum / numbersArray.length;
  
  document.getElementById('averageResult').innerHTML = "A média dos números é: " + average;
}
