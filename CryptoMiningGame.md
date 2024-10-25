---
toc: True
comments: True
layout: post
title: Crypto Mining Game
description: Crypto Mining Game for PBL tri 1 Porject
courses: {csa: {week: 9}}
type: ccc
categories: ['DevOps']
---


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crypto Mining Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        #game-container {
            text-align: center;
            margin-top: 50px;
        }
        #mine-btn {
            padding: 15px 30px;
            font-size: 20px;
            cursor: pointer;
            background-color: #88bc4c;
            border: none;
            color: white;
            border-radius: 5px;
        }
        #mine-btn:hover {
            background-color: #6fa837;
        }
        #stats {
            margin-top: 20px;
        }
        #upgrade-btn {
            padding: 10px 20px;
            margin-top: 10px;
            cursor: pointer;
            background-color: #4c8dbc;
            border: none;
            color: white;
            border-radius: 5px;
        }
        #upgrade-btn:hover {
            background-color: #3a72a3;
        }
    </style>
</head>
<body>
    <div id="game-container">
        <h1>Crypto Mining Game</h1>
        <button id="mine-btn">Mine Crypto</button>
        <div id="stats">
            <p>Coins: <span id="coins">0</span></p>
            <p>Mining Power: <span id="power">1</span> coins per click</p>
        </div>
        <button id="upgrade-btn">Upgrade Mining Power (10 Coins)</button>
    </div>
    <script>
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
    </script>
</body>
</html>