// 26.11.1990           20.03.1987          07.08.1993
let resultsArray = [
  "Error.",
  "Your lifepath number is one.",
  "Your lifepath number is two. Individuals with a Life Path Number of 2 embody the essence of peace and harmony. Guided by their emotional depth and genuine empathy, they hold a compassionate space for those around them. Their reserved and conservative nature reflects their thoughtful approach to life, often considering each step with care. However, these attributes of the Life Path Number 2 carry dual potentials – an advantage and a challenge – contingent on how they channel these inherent qualities.",
  "Your lifepath number is three.",
  "Your lifepath number is four.",
  "Your lifepath number is five.",
  "Your lifepath number is six.",
  "Your lifepath number is seven.",
  "Your lifepath number is eight.",
  "Your lifepath number is nine.",
];

function findNumber(event) {
  event.preventDefault();

  let dobInput = document.getElementById("dob").value;
  let arrayOfStrings = Array.from(dobInput);

  arrayOfStrings.splice(4, 1);
  arrayOfStrings.splice(6, 1);

  let arrayOfNumbers = arrayOfStrings.map(Number);

  let sum = 0;

  arrayOfNumbers.forEach((item) => {
    sum += item;
  });

  while (sum >= 10) {
    let numberResult = 0;
    numberResult = Array.from(String(sum));
    arrayOfNumbers = numberResult.map(Number);
    sum = arrayOfNumbers.reduce((acc, num) => acc + num);
  }

  let displayResults = document.querySelector(".numbersForm");
  displayResults.innerHTML = `
    <p class="calculationResults">${resultsArray[sum]}</h2><br/>
    
    <button class="findYourMatch"><a href="/signup.html">Find your match</a></button>`;
}

let numDetails = document.querySelector(".submitDetails");
numDetails.addEventListener("click", findNumber);
