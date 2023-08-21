// 26.11.1990           20.03.1987          07.08.1993
let resultsArray = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "",
  "Eleven",
];

function findLifeLesson(event) {
  event.preventDefault();

  let dobInput = document.getElementById("dob").value;
  let arrayOfStrings = Array.from(dobInput);

  arrayOfStrings.splice(4, 1);
  arrayOfStrings.splice(6, 1);
  let arrayOfNumbers = arrayOfStrings.map(Number);
  let sum = arrayOfNumbers.reduce((acc, num) => acc + num);

  while (sum >= 10 && ![11, 22, 33, 44].includes(sum)) {
    let numberResult = Array.from(String(sum));
    arrayOfNumbers = numberResult.map(Number);
    sum = arrayOfNumbers.reduce((acc, num) => acc + num);
  }

  let displayResults = document.querySelector(".boxCalculation");

  displayResults.innerHTML = `
      <p class="calculationResults">Your life lesson number is ${resultsArray[sum]}</h2><br/>
      <input type="email" placeholder="Enter email address"/>
      <button class="emailResults">Email the results</button>
      <p>In entering your email address, you agree to being kept up to date with Flup's journey.</p>
    `;
}

let numDetails = document.querySelector(".submitDetails");
numDetails.addEventListener("click", findLifeLesson);

//if someone is 37 in date of birth, then it is 37/1
//78 is the maximum number

// Melanie Mae Clarke65
