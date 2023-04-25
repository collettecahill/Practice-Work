let userName = 'Collette';
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');
let userQuestion = 'Am I the best coder?';
console.log(`${userName}, you have asked "${userQuestion}"`)

let randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber)

let eightBall = ''

if (randomNumber == 0) {
  eightBall = 'It is certain'}
else if (randomNumber == 1) {
  eightBall = 'It is decidedly so'}
else if (randomNumber == 2) {
  eightBall = 'Reply hazy try again'}
else if (randomNumber == 3) {
  eightBall = 'Cannot predict now'}
else if (randomNumber == 4) {
  eightBall = 'Do not count on it'}
else if (randomNumber == 5) {
  eightBall = 'My sources say no'}
else if (randomNumber == 6) {
    eightBall = 'Outlook not so good'}
else if (randomNumber == 7) {
  eightBall = 'Signs point to yes'}
  else {eightBall = 'Not valid'}

/*switch (eightBall) {
case randomNumber = 0 : 'It is certain'
break;
case randomNumber = 1 : 'It is decidedly so'
break;
case randomNumber = 2 : 'Reply hazy try again'
break;
case randomNumber = 3 : 'Cannot predict now'
break;
case randomNumber = 4 : 'Do not count on it'
break;
case randomNumber = 5 : 'My sources say no'
break;
case randomNumber = 6 : 'Outlook not so good'
break;
case randomNumber = 7 : 'Signs point to yes'
break;
}*/

console.log(`The Magic Eight Ball says '${eightBall}`)

/*let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = true
let runnerAge = 18
if (runnerAge > 18 && regEarly) {raceNumber += 1000}
if (raceNumber > 1000)  {console.log(`You will start at 9:30 and your race number is ${raceNumber}`)}
else if (runnerAge > 18 && !regEarly) {console.log(`You will start at 11:00 and your race number is ${raceNumber}`)}
else if (runnerAge < 18) {console.log(`You will start at 12:30 and your race number is ${raceNumber}`)}
else {console.log("Please see the registration desk")}*/