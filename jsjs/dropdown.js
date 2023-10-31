function multiply() {
    let dropdown = document.getElementById("dropdown").value;
    let number = document.getElementById("number").value;
    let result = 25000 / dropdown * number;

    document.getElementById("result").innerHTML = `your healthy dose (g) : ${result}`
    document.getElementById("death").innerHTML = "e v e r"
  }

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Your JavaScript code...
  });

  document.onselectstart = function() {
    return false; 
  };

  document.oncopy = function() {
    return false;
  };