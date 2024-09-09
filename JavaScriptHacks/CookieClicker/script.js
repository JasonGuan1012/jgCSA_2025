// Variables to keep track of how many cookies, workers, and how fast cookies are generated
let cookieCount = 0;        // Number of cookies you have
let workerCount = 0;        // Number of workers you have
let cookiesPerSecond = 0;   // How many cookies you're getting every second
const workerCost = 50;      // The cost to buy one worker

// Get elements from the HTML so we can change what they display
const cookie = document.getElementById('cookie');         // The cookie image
const cookieCountDisplay = document.getElementById('cookieCount'); // Where we show the cookie count
const workerCountDisplay = document.getElementById('workerCount'); // Where we show the worker count
const cpsDisplay = document.getElementById('cps');        // Where we show cookies per second
const buyWorkerBtn = document.getElementById('buyWorker'); // The button to buy workers
const clickSound = document.getElementById('clickSound'); // The sound that plays when clicking the cookie

// This updates the displayed numbers for cookies, workers, and cookies per second
function updateDisplay() {
    cookieCountDisplay.textContent = cookieCount;   // Show how many cookies you have
    workerCountDisplay.textContent = workerCount;   // Show how many workers you have
    cpsDisplay.textContent = cookiesPerSecond;      // Show cookies per second
}

// What happens when you click the cookie
cookie.addEventListener('click', function() {
    cookieCount++;          // Increase the cookie count by 1
    clickSound.play();      // Play the sound
    updateDisplay();        // Update the numbers on the screen
});

// This generates cookies automatically every second based on workers
function generateCookies() {
    cookieCount += cookiesPerSecond;   // Add cookies every second depending on how many workers you have
    updateDisplay();                   // Update the numbers on the screen
}

// What happens when you click the "Buy Worker" button
buyWorkerBtn.addEventListener('click', function() {
    if (cookieCount >= workerCost) {   // Check if you have enough cookies to buy a worker
        cookieCount -= workerCost;     // If yes, subtract the worker's cost from your cookies
        workerCount++;                 // Increase the number of workers by 1
        cookiesPerSecond++;            // Each worker adds 1 cookie per second
        updateDisplay();               // Update the numbers on the screen
    } else {
        alert("Not enough cookies to buy a worker!");  // If you don't have enough cookies, show an alert
    }
});

// This runs the generateCookies function every 1000 milliseconds (1 second)
setInterval(generateCookies, 1000);
