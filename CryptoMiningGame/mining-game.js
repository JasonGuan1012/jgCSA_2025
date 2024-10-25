// DOM elements
const mineButton = document.getElementById('mine-btn');
const upgradeButton = document.getElementById('upgrade-btn');
const coinsElement = document.getElementById('coins');
const powerElement = document.getElementById('power');

// Game data
let coins = 0;
let miningPower = 1;

// Function to send a POST request to the mine API
function mineCrypto() {
    fetch('/api/mining/mine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ miningPower: miningPower })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Logs the backend response
        coins += miningPower; // Increase coins based on mining power
        coinsElement.textContent = coins; // Update the UI with new coins count
    })
    .catch(error => console.error('Error:', error));
}

// Function to send a POST request to the upgrade API
function upgradeMiningPower() {
    fetch('/api/mining/upgrade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ coins: coins, miningPower: miningPower })
    })
    .then(response => {
        if (response.ok) {
            miningPower += 1; // Increase mining power
            coins -= 10; // Deduct coins for the upgrade
            coinsElement.textContent = coins; // Update the UI with new coins count
            powerElement.textContent = miningPower; // Update the UI with new mining power
        } else {
            console.log("Not enough coins for upgrade");
        }
    })
    .catch(error => console.error('Error:', error));
}

// Event listeners for buttons
mineButton.addEventListener('click', mineCrypto);
upgradeButton.addEventListener('click', upgradeMiningPower);
