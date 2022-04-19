"use script";

let fullName = "Duy Pham";
let age = 33;
const birthday = "February 23";
let pineapplePizza = false;
const lifeEvents = [
  "I was born in Lafayette, Indiana.",
  "I went to Holt High School.",
  "I visited my motherland for the first time when I was 15 years old.",
  "I am a student of a Grand Circus bootcamp.",
];

if (pineapplePizza) {
  console.log(
    `My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${fullName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  counter++;
  if (randomNumber !== 5) {
    console.log(`${randomNumber} !== 5`);
  } else {
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}

// EXTENDED CHALLENGES
let hours = Number(prompt("Enter number of hours worked:"));
let wage = Number(prompt("Enter hourly wage amount:"));
let pay = null;

console.log(`Hours worked: ${hours}`);
console.log(`Wage earned: ${wage}`);

if (hours > 40) {
  let otHours = hours - 40;
  let otWage = wage * 1.5;
  let otPay = otHours * otWage;
  pay = wage * 40;
  paycheck = pay + otPay;
  console.log(
    `Pay: $${paycheck} (40hrs at $${wage} + ${otHours}hrs at $${otWage})`
  );
} else {
  pay = hours * wage;
  console.log(`pay: ${pay}`);
}

console.log(
  `It would take ${Math.ceil(1000000 / pay)} weeks to make one million dollars`
);
