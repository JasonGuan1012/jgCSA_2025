---
toc: True
comments: True
layout: post
title: Crypto Mining Game
description: Crypto Mining Game for PBL tri 1 Project
courses: {csa: {week: 9}}
type: ccc
categories: ['DevOps']
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1e1e1e;
            color: #ffffff;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
        }
        #coins, #power {
            font-weight: bold;
        }
        button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 10px 2px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #45a049; /* Darker green */
        }
        #gpu-shop {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0, 0, 0); /* Fallback color */
            background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
            padding-top: 60px;
        }
        #gpu-list {
            list-style-type: none;
            padding: 0;
        }
        #gpu-list li {
            margin: 10px 0;
            padding: 10px;
            background-color: #2e2e2e; /* Darker gray */
            border-radius: 5px;
        }
        #gpu-list button {
            margin-left: 10px;
            background-color: #008CBA; /* Blue */
        }
        #gpu-list button:hover {
            background-color: #007bb5; /* Darker blue */
        }
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        .close:hover,
        .close:focus {
            color: white;
            text-decoration: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="game-container">
        <button id="mine-btn">Start Mining</button>
        <div id="stats">
            <p>Coins: <span id="coins">0</span></p>
            <p>Mining Power: <span id="power">1</span> coins per hour</p>
            <p>Current GPU: <span id="current-gpu">NVIDIA GeForce GT 1030</span></p>
        </div>
        <button id="upgrade-btn">Upgrade Mining Power (10 Coins)</button>
        <button id="shop-btn">Open GPU Shop</button>
    </div>
    <!-- GPU Shop Modal -->
    <div id="gpu-shop">
        <div style="background-color: #444; padding: 20px; margin: 10% auto; width: 80%; border-radius: 10px;">
            <span class="close" id="close-shop">&times;</span>
            <h2>Buy a GPU</h2>
            <ul id="gpu-list"></ul>
        </div>
    </div>
    <script>
        // DOM elements
        const mineButton = document.getElementById('mine-btn');
        const upgradeButton = document.getElementById('upgrade-btn');
        const shopButton = document.getElementById('shop-btn');
        const closeShopButton = document.getElementById('close-shop');
        const coinsElement = document.getElementById('coins');
        const powerElement = document.getElementById('power');
        const currentGpuElement = document.getElementById('current-gpu');
        const gpuShopElement = document.getElementById('gpu-shop');
        const gpuListElement = document.getElementById('gpu-list');
        // Game data
        let coins = 50;
        let miningPower = 1;
        let currentGpuIndex = 0;
        // GPU data
        const gpuList = [
            { name: "NVIDIA GeForce GT 1030", price: 0, coinsPerHour: 1 },
            { name: "NVIDIA GeForce GTX 1050", price: 50, coinsPerHour: 2 },
            { name: "NVIDIA GeForce GTX 1050 Ti", price: 200, coinsPerHour: 3 },
            { name: "NVIDIA GeForce GTX 1060", price: 500, coinsPerHour: 4 },
            { name: "NVIDIA GeForce GTX 1660", price: 800, coinsPerHour: 5 },
            { name: "NVIDIA GeForce GTX 1660 Ti", price: 1000, coinsPerHour: 6 },
            { name: "NVIDIA GeForce RTX 2060", price: 1200, coinsPerHour: 7 },
            { name: "NVIDIA GeForce RTX 2070", price: 1300, coinsPerHour: 8 },
            { name: "NVIDIA GeForce RTX 2080", price: 1400, coinsPerHour: 9 },
            { name: "NVIDIA GeForce RTX 2080 Ti", price: 1500, coinsPerHour: 10 },
            { name: "NVIDIA GeForce RTX 3060", price: 1700, coinsPerHour: 12 },
            { name: "NVIDIA GeForce RTX 3070", price: 1800, coinsPerHour: 14 },
            { name: "NVIDIA GeForce RTX 3080", price: 1900, coinsPerHour: 16 },
            { name: "NVIDIA GeForce RTX 3080 Ti", price: 2000, coinsPerHour: 18 },
            { name: "NVIDIA GeForce RTX 3090", price: 2200, coinsPerHour: 20 },
            { name: "NVIDIA GeForce RTX 4070", price: 2500, coinsPerHour: 19 },
            { name: "NVIDIA GeForce RTX 4080", price: 3600, coinsPerHour: 21 },
            { name: "NVIDIA GeForce RTX 4090", price: 4000, coinsPerHour: 25 },
        ];
        // Function to start mining
        function startMining() {
            setInterval(() => {
                coins += miningPower; // Increase coins based on mining power
                coinsElement.textContent = coins; // Update the UI with new coins count
            }, 3600000); // Adjust to 1 hour for mining coins
        }
        // Function to upgrade mining power
        function upgradeMiningPower() {
            if (coins >= 10) {
                miningPower += 1; // Increase mining power
                coins -= 10; // Deduct coins for the upgrade
                coinsElement.textContent = coins; // Update the UI with new coins count
                powerElement.textContent = miningPower; // Update the UI with new mining power
            } else {
                alert("Not enough coins for upgrade");
            }
        }
        // Function to open GPU shop
        function openGpuShop() {
            gpuListElement.innerHTML = ''; // Clear existing list
            gpuList.forEach((gpu, index) => {
                const li = document.createElement('li');
                li.textContent = `${gpu.name} - ${gpu.price} coins`;
                const buyButton = document.createElement('button');
                buyButton.textContent = "Buy";
                buyButton.onclick = () => buyGpu(index);
                li.appendChild(buyButton);
                gpuListElement.appendChild(li);
            });
            gpuShopElement.style.display = "block"; // Show the GPU shop
        }
        // Function to buy a GPU
        function buyGpu(index) {
            const gpu = gpuList[index];
            if (coins >= gpu.price) {
                coins -= gpu.price; // Deduct coins for the purchase
                coinsElement.textContent = coins; // Update coins UI
                currentGpuIndex = index; // Update current GPU index
                currentGpuElement.textContent = gpu.name; // Update current GPU display
                miningPower = gpu.coinsPerHour; // Set new mining power based on GPU
                powerElement.textContent = miningPower; // Update mining power UI
                gpuShopElement.style.display = "none"; // Close the shop
            } else {
                alert("Not enough coins to buy this GPU");
            }
        }
        // Event listeners for buttons
        mineButton.addEventListener('click', startMining);
        upgradeButton.addEventListener('click', upgradeMiningPower);
        shopButton.addEventListener('click', openGpuShop);
        closeShopButton.addEventListener('click', () => gpuShopElement.style.display = "none");
    </script>
</body>
</html>
