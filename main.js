let inputElement = document.querySelector('input')
let rollButton = document.querySelector('.rollbutton')
let totalNum = document.querySelector('.total')
let resetButton = document.querySelector('.resetbutton')
let showAllrolls = document.querySelector('.show-all-rolls')
const dieRolls = []
const diceList = document.querySelector('ol')



showAllrolls.addEventListener('click', function () {
    console.log('click it');
    let index = 0
    while (index < dieRolls.length) {
        let rollValue = dieRolls[index]
        let newDiceString = '<li class="dice">' + rollValue + "</li>"
        diceList.innerHTML += newDiceString
        // const newDiceString = '<li class="dice">' + numberRolled + "</li>";
        // allRollsElement.innerHTML += newDiceString;

        index += 1
    }
})

rollButton.addEventListener('click', function () {
    console.log('click');
    let numDierolls = inputElement.value
    let index = 0
    let total = 0
    while (index < numDierolls) {
        let rollValue = Math.floor(Math.random() * 6) + 1
        console.log(rollValue);
        dieRolls.push(rollValue)
        total += rollValue




        index += 1
    }
    console.log(dieRolls);
    console.log(total);
    totalNum.innerHTML = total


})

resetButton.addEventListener('click', function () {
    console.log('click to reset');
})


// Create a variable, named dieRolls, and define it as an empty array (which later you will use as a list of each die that has been rolled). (1 point)
// Add a click event listener for your "Roll!" button. (1 point)
// On click, you need to get the value from the text input box, so that you know how many dice to roll. Assign this to a variable within your event listener. (1 point)
// Then you need to roll the dice. It is time to write a loop. Use Math.random() to simulate rolling a single six-sided die X number of times, where X is the number from the text input box. X is also the number of times you will loop. (4 points)
// Push the result of each roll onto your dieRolls array. (2 points)
// Sum all your dice rolls and display the result in the Total area on the page using innerHTML. (2 point)

