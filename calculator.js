caches.open('my-cache').then(function(cache) {
  cache.add('/my-file.txt');
});

let calculation = "";
let totalSum = 0;
let totalBags = 0;
let lessBagWeight = 0;
let cQty = 0;
let c1Clicked = 0;
let cClicked = 0;
let alltotalBags = 0;

function addToCalculation(value) {
  calculation += value;
  document.getElementById("calculation").value = calculation;
}


let clickCount = 0;

function clearCalculation() {
  
    document.getElementById("calculation").value = "";
    calculation = "";
    totalSum = 0;
    totalBags = 0;
    lessBagWeight = 0;
    cQty = 0;
    // clickCount = 0;
    document.getElementById("totalBags").textContent = totalBags;
    document.getElementById("lessBagWeight").textContent = lessBagWeight;
    document.getElementById("cQty").textContent = cQty;
}
  
function calculate() {
    // c1Clicked++;
    const sum = eval(calculation);
    totalBags += (calculation.match(/[0-9.]+/g) || []).length;
    totalSum += sum;
    lessBagWeight = Math.ceil(totalBags / 2);
    cQty = totalSum - lessBagWeight;
   
    
      document.getElementById("calculation").value = sum;
      calculation = "" + sum;
    
    // document.getElementById("totalBags").textContent = totalBags;
    // document.getElementById("lessBagWeight").textContent = lessBagWeight;
    // document.getElementById("cQty").textContent = cQty;
  }
  

  function clearDisplay() {
    document.getElementById("calculation").value = "";
    calculation = "";
  }
  
  function calculateAll() {
      document.getElementById("calculation").value = totalSum;
      calculation = "" + totalSum;
      alltotalBags += totalBags;
      document.getElementById("totalBags").textContent = totalBags;
      document.getElementById("lessBagWeight").textContent = lessBagWeight;
      document.getElementById("cQty").textContent = cQty;
    
  }
  
