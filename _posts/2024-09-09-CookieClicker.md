---
layout: post
categories: [Hacks]
title: CookieClicker
description:  CookieClicker
type: issues 
comments: true\
permalink: /cookieclicker
hide: true
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        .game-container {
            margin-top: 50px;
        }
        #cookie {
            width: 200px;
            cursor: pointer;
        }
        button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #4caf50; /* Default button color */
            color: white;
            box-shadow: 0 0 10px #88bc4c, 0 0 20px #88bc4c;
            transition: all 0.3s ease;
        }
        button:hover {
            background-color: #45a049; /* Slightly darker color on hover */
            box-shadow: 0 0 15px #88bc4c, 0 0 25px #88bc4c;
        }
        p {
            font-size: 18px;
        }
        #cookieCount {
            color: #88bc4c;
            font-size: 24px;
            text-shadow: 0 0 10px #88bc4c, 0 0 20px #88bc4c, 0 0 30px #88bc4c, 0 0 40px #88bc4c, 0 0 50px #88bc4c;
        }
    </style>
</head>
<body>
    <div class="game-container">
        <img src="https://i.ibb.co/37LFgWC/COOKIE.png" alt="Cookie" id="cookie" />
        <p>Cookies: <span id="cookieCount">0</span></p>
        <p>Workers: <span id="workerCount">0</span></p>
        <p>Cookies Per Second: <span id="cps">0</span></p>
        <button id="buyWorker">Buy Worker (Cost: 25 cookies)</button>
        <audio id="clickSound" src="https://audio.jukehost.co.uk/aE3AaMXpSwwYDFD3iB93QSBe3PRKMjSo"></audio>
    </div>
    <script>
        let cookieCount = 0;
        let workerCount = 0;
        let cookiesPerSecond = 0;
        const workerCost = 25;
        const cookie = document.getElementById('cookie');
        const cookieCountDisplay = document.getElementById('cookieCount');
        const workerCountDisplay = document.getElementById('workerCount');
        const cpsDisplay = document.getElementById('cps');
        const buyWorkerBtn = document.getElementById('buyWorker');
        const clickSound = document.getElementById('clickSound');
        // Updating the display
        function updateDisplay() {
            cookieCountDisplay.textContent = cookieCount;
            workerCountDisplay.textContent = workerCount;
            cpsDisplay.textContent = cookiesPerSecond;
        }
        // Play sound with error handling
        function playClickSound() {
            clickSound.currentTime = 0; // This resets the audio to the start
            clickSound.play().catch(error => {
                console.log("Audio playback failed: ", error);
            });
        }
        // On cookie click
        cookie.addEventListener('click', function() {
            cookieCount++;
            playClickSound();
            updateDisplay();
        });
        // Generate cookies automatically based on the workers that the player bought
        function generateCookies() {
            cookieCount += cookiesPerSecond;
            updateDisplay();
        }     
        // Here's where you can buy workers
        buyWorkerBtn.addEventListener('click', function() {
            if (cookieCount >= workerCost) {
                cookieCount -= workerCost;
                workerCount++;
                cookiesPerSecond++;
                updateDisplay();
            } else {
                alert("Not enough cookies to buy a worker!");
            }
        });
        // Interval to generate cookies per second
        setInterval(generateCookies, 1000);
    </script>
</body>
</html>