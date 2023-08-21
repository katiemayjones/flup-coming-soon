// 26.11.1990           20.03.1987          07.08.1993
let resultsArray = [
  "",
  "Your lifepath number is one.",
  "Your lifepath number is two. Individuals with a Life Path Number of 2 embody the essence of peace and harmony. Guided by their emotional depth and genuine empathy, they hold a compassionate space for those around them. Their reserved and conservative nature reflects their thoughtful approach to life, often considering each step with care. However, these attributes of the Life Path Number 2 carry dual potentials – an advantage and a challenge – contingent on how they channel these inherent qualities.",
  "Your lifepath number is three.",
  "Your lifepath number is four.",
  "Your lifepath number is five.",
  "Your lifepath number is six.",
  "Your lifepath number is seven.",
  "Your lifepath number is eight.",
  "Your lifepath number is nine.",
  "",
  "Your lifepath number is eleven.",
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
      <p class="calculationResults">${resultsArray[sum]}</h2><br/>
      <input type="email" placeholder="Enter email address"/>
      <button class="emailResults">Email the results</button>
      <p>In entering your email address, you agree to being kept up to date with Flup's journey.</p>
    `;
}


let numDetails = document.querySelector(".submitDetails");
numDetails.addEventListener("click", findLifeLesson);

let lettersOne = ["a", "j", "s"];
let lettersTwo = ["b", "k", "t"];
let lettersThree = ["c", "l", "u"];
let lettersFour = ["d", "m", "v"];
let lettersFive = ["e", "n", "w"];
let lettersSix = ["f", "o", "x"];
let lettersSeven = ["g", "p", "y"];
let lettersEight = ["h", "q", "z"];
let lettersNine = ["i", "r"];

// Melanie Mae Clarke65
