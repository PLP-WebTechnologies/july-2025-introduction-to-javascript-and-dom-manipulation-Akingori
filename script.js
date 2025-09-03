// ========================
// Part 1: Variables & Conditionals
// ========================

// Variable declarations
let ageInput = document.getElementById('ageInput');
let ageResult = document.getElementById('ageResult');
let checkAgeBtn = document.getElementById('checkAgeBtn');

// Conditional check function
function checkIfAdult(age) {
    if (age >= 18) {
        return 'You are an adult.';
    } else if (age >= 0) {
        return 'You are a minor.';
    } else {
        return 'Please enter a valid age.';
    }
}

// Event listener for Part 1
checkAgeBtn.addEventListener('click', () => {
    const age = parseInt(ageInput.value, 10);
    ageResult.textContent = checkIfAdult(age);
});


// ========================
// Part 2: Custom Functions
// ========================

// Function 1: Display current time
function displayCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

// Function 2: Return a random fun fact
function getRandomFact() {
    const facts = [
        'Honey never spoils.',
        'Bananas are berries, but strawberries are not.',
        'Octopuses have three hearts.',
        'A group of flamingos is called a "flamboyance."'
    ];
    const idx = Math.floor(Math.random() * facts.length);
    return facts[idx];
}

// DOM elements & event listeners for Part 2
document.getElementById('showTimeBtn')
    .addEventListener('click', () => {
        document.getElementById('timeDisplay').textContent = displayCurrentTime();
    });

document.getElementById('randomFactBtn')
    .addEventListener('click', () => {
        document.getElementById('factDisplay').textContent = getRandomFact();
    });


// ========================
// Part 3: Loop Examples
// ========================

let listNumbersBtn = document.getElementById('listNumbersBtn');
let numberList = document.getElementById('numberList');

listNumbersBtn.addEventListener('click', () => {
    numberList.innerHTML = ''; // clear old list
    // Loop example 1: for loop
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement('li');
        li.textContent = `Number ${i}`;
        numberList.appendChild(li);
    }
});

let countdownBtn = document.getElementById('countdownBtn');
let countdownList = document.getElementById('countdownList');

countdownBtn.addEventListener('click', () => {
    countdownList.innerHTML = '';
    // Loop example 2: while loop
    let n = 5;
    while (n > 0) {
        let li = document.createElement('li');
        li.textContent = `Countdown: ${n}`;
        countdownList.appendChild(li);
        n--;
    }
});


// ========================
// Part 4: DOM Interactions
// ========================

// Interaction 1: Add colored box
document.getElementById('addBoxBtn')
    .addEventListener('click', () => {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.getElementById('boxContainer').appendChild(box);
    });

// Interaction 2: Change page background color
document.getElementById('changeBgBtn')
    .addEventListener('click', () => {
        let color = document.getElementById('bgColorInput').value.trim();
        if (color) {
            document.body.style.backgroundColor = color;
        }
    });

// Interaction 3: Remove all boxes on double-click
document.getElementById('boxContainer')
    .addEventListener('dblclick', () => {
        document.getElementById('boxContainer').innerHTML = '';
    });