---
toc: false
comments: True
layout: post
title: Crypto Mining Game
description: Crypto Mining Game for PBL tri 1 Project
courses: {csa: {week: 9}}
type: ccc
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crypto Mining Simulator</title>
    <!-- Add Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- Add modern CSS framework -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* More subtle RGB Border Animation for Dark Theme */
        @keyframes cyber-border-glow {
            0% { 
                border-color: rgba(255, 0, 0, 0.5);  /* Softer red */
                box-shadow: 0 0 10px rgba(255, 0, 0, 0.3),
                           inset 0 0 15px rgba(255, 0, 0, 0.2);
            }
            33% { 
                border-color: rgba(15, 255, 0, 0.5);  /* Softer green */
                box-shadow: 0 0 10px rgba(15, 255, 0, 0.3),
                           inset 0 0 15px rgba(15, 255, 0, 0.2);
            }
            66% { 
                border-color: rgba(0, 255, 255, 0.5);  /* Softer cyan */
                box-shadow: 0 0 10px rgba(0, 255, 255, 0.3),
                           inset 0 0 15px rgba(0, 255, 255, 0.2);
            }
            100% { 
                border-color: rgba(255, 0, 0, 0.5);  /* Back to softer red */
                box-shadow: 0 0 10px rgba(255, 0, 0, 0.3),
                           inset 0 0 15px rgba(255, 0, 0, 0.2);
            }
        }
        /* Updated Dashboard Card Styling */
        .dashboard-card {
            background: rgba(17, 24, 39, 0.95);
            border: 1.5px solid;
            border-radius: 0.75rem;
            padding: 1.25rem;
            animation: rgb-breathe 6s ease-in-out infinite;
            position: relative;
            backdrop-filter: blur(5px);
            transition: all 0.3s ease;
        }
        /* Different animation delays for wave effect */
        .dashboard-card:nth-child(1) { animation-delay: 0s; }
        .dashboard-card:nth-child(2) { animation-delay: 0.5s; }
        .dashboard-card:nth-child(3) { animation-delay: 1s; }
        .dashboard-card:nth-child(4) { animation-delay: 1.5s; }
        .dashboard-card:nth-child(5) { animation-delay: 2s; }
        /* Card title styling */
        .dashboard-card h2 {
            color: white;
            font-size: 0.9rem;
            font-weight: bold;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        /* Stats styling */
        .stat-label {
            color: #9ca3af;
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
        }
        .stat-value {
            color: white;
            font-size: 1rem;
            font-weight: bold;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }
        /* Hover effect */
        .dashboard-card:hover {
            transform: translateY(-2px) scale(1.01);
            animation-play-state: paused;
            border-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2),
                        inset 0 0 25px rgba(255, 255, 255, 0.1);
        }
        /* Add corner accents */
        .dashboard-card::before,
        .dashboard-card::after {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            border: 2px solid currentColor;
            animation: cyber-border-glow 3s linear infinite;
        }
        .dashboard-card::before {
            top: -2px;
            left: -2px;
            border-right: 0;
            border-bottom: 0;
        }
        .dashboard-card::after {
            bottom: -2px;
            right: -2px;
            border-left: 0;
            border-top: 0;
        }
        .chart-container {
            @apply bg-gray-800 rounded-lg p-4 mt-4;
            height: 300px;
        }
        .gpu-shop-modal {
            position: fixed;
            inset: 0;  /* Same as top:0, right:0, bottom:0, left:0 */
            background-color: rgba(0, 0, 0, 0.75);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 50;
        }
        .gpu-shop-content {
            background-color: #1f2937; /* Dark gray background */
            width: 90%;
            max-width: 900px;
            max-height: 80vh;  /* 80% of viewport height */
            border-radius: 0.5rem;
            padding: 1.5rem;
            position: relative;
        }
        .gpu-list-container {
            overflow-y: auto;
            max-height: calc(80vh - 4rem); /* Account for header */
            padding-right: 1rem;
            /* Scrollbar styling */
            scrollbar-width: thin;
            scrollbar-color: #4b5563 #1f2937;
        }
        /* Webkit scrollbar styling */
        .gpu-list-container::-webkit-scrollbar {
            width: 8px;
        }
        .gpu-list-container::-webkit-scrollbar-track {
            background: #1f2937;
        }
        .gpu-list-container::-webkit-scrollbar-thumb {
            background-color: #4b5563;
            border-radius: 4px;
        }
        /* Add to your existing styles */
        .dashboard-card.mt-8 {
            background-color: rgba(17, 24, 39, 0.95); /* Darker background */
            border: 2px solid;
            border-radius: 0.75rem;
            padding: 1.25rem;
            animation: cyber-border-glow 3s linear infinite;
            position: relative;
            backdrop-filter: blur(5px);
        }
        .dashboard-card.mt-8 h2 {
            color: white;
            font-size: 1rem;
            font-weight: bold;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        .dashboard-card.mt-8 .guide-step {
            color: #9ca3af;
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
        }
        .dashboard-card.mt-8 .guide-step h3 {
            color: #00ff00;
            font-size: 1rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        }
        .dashboard-card.mt-8 .guide-step p {
            color: white;
            font-size: 1rem;
            font-weight: bold;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }
        .dashboard-card.mt-8 .guide-step ul {
            list-style-type: none;
            padding-left: 0;
        }
        .dashboard-card.mt-8 .guide-step ul li {
            color: white;
            font-size: 1rem;
            font-weight: bold;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }
        .dashboard-card.mt-8 .guide-step ul li span {
            color: #00ff00;
            font-size: 1rem;
            font-weight: bold;
            text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        }
        /* RGB Breathing Animation */
        @keyframes rgb-breathe {
            0% {
                border-color: rgba(255, 0, 0, 0.4);
                box-shadow: 0 0 15px rgba(255, 0, 0, 0.2),
                           inset 0 0 20px rgba(255, 0, 0, 0.1);
                transform: scale(1);
            }
            25% {
                border-color: rgba(255, 0, 255, 0.4);
                box-shadow: 0 0 15px rgba(255, 0, 255, 0.2),
                           inset 0 0 20px rgba(255, 0, 255, 0.1);
                transform: scale(1.002);
            }
            50% {
                border-color: rgba(0, 0, 255, 0.4);
                box-shadow: 0 0 15px rgba(0, 0, 255, 0.2),
                           inset 0 0 20px rgba(0, 0, 255, 0.1);
                transform: scale(1);
            }
            75% {
                border-color: rgba(0, 255, 0, 0.4);
                box-shadow: 0 0 15px rgba(0, 255, 0, 0.2),
                           inset 0 0 20px rgba(0, 255, 0, 0.1);
                transform: scale(1.002);
            }
            100% {
                border-color: rgba(255, 0, 0, 0.4);
                box-shadow: 0 0 15px rgba(255, 0, 0, 0.2),
                           inset 0 0 20px rgba(255, 0, 0, 0.1);
                transform: scale(1);
            }
        }
        /* Add these new styles to your existing <style> section */
        /* GPU Card Base Style */
        .gpu-card {
            transition: all 0.3s ease;
            border: 2px solid transparent;
            background: rgba(17, 24, 39, 0.95);
        }
        /* Starter GPU - Green glow */
        .gpu-card.starter:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
            border-color: rgba(0, 255, 0, 0.5);
        }
        /* Budget GPU - Blue glow */
        .gpu-card.budget:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 15px rgba(0, 128, 255, 0.3);
            border-color: rgba(0, 128, 255, 0.5);
        }
        /* Mid-Range GPU - Purple glow */
        .gpu-card.mid-range:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 15px rgba(147, 51, 234, 0.3);
            border-color: rgba(147, 51, 234, 0.5);
        }
        /* High-End GPU - Orange glow */
        .gpu-card.high-end:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 15px rgba(255, 165, 0, 0.3);
            border-color: rgba(255, 165, 0, 0.5);
        }
        /* Premium GPU - Red glow */
        .gpu-card.premium:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
            border-color: rgba(255, 0, 0, 0.5);
        }
        /* GPU Card Hover Effects - Updated for your structure */
        .gpu-card {
            background: rgba(26, 31, 46, 0.95);
            border-radius: 0.5rem;
            padding: 1rem;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        /* Free Starter GPU */
        .gpu-card:has(h3:contains("NVIDIA GeForce GT 1030")):hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); /* Green glow */
            border-color: rgba(34, 197, 94, 0.5);
        }
        /* Budget GPUs */
        .gpu-card:has(h3[class*="text-blue-400"]):hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); /* Blue glow */
            border-color: rgba(59, 130, 246, 0.5);
        }
        /* Mid-Range GPUs */
        .gpu-card:has(h3[class*="text-purple-400"]):hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); /* Purple glow */
            border-color: rgba(147, 51, 234, 0.5);
        }
        /* High-End GPUs */
        .gpu-card:has(h3[class*="text-orange-400"]):hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(251, 146, 60, 0.3); /* Orange glow */
            border-color: rgba(251, 146, 60, 0.5);
        }
        /* Premium GPUs */
        .gpu-card:has(h3[class*="text-red-400"]):hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); /* Red glow */
            border-color: rgba(239, 68, 68, 0.5);
        }
        /* Add glass effect */
        .gpu-card {
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }
        /* Smooth transitions */
        .gpu-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        /* Add subtle animation on hover */
        .gpu-card:hover {
            transform: translateY(-5px) scale(1.02);
        }
    </style>
</head>
<body class="bg-gray-900 text-white min-h-screen p-6">
    <div class="container mx-auto">
        <!-- Main Dashboard -->
        <!-- Add these above your Bitcoin Market section -->
        <div class="grid grid-cols-3 gap-4 mb-4">
            <!-- NiceHash Market -->
            <div class="dashboard-card">
                <h2>NiceHash Market</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">NICE Price</div>
                        <div class="stat-value" id="nice-price">$0.00</div>
                    </div>
                    <div>
                        <div class="stat-label">24h Change</div>
                        <div class="stat-value" id="nice-change">0.00%</div>
                    </div>
                </div>
            </div>
            <!-- Ethereum Market -->
            <div class="dashboard-card">
                <h2>Ethereum Market</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">ETH Price</div>
                        <div class="stat-value" id="eth-price">$0.00</div>
                    </div>
                    <div>
                        <div class="stat-label">24h Change</div>
                        <div class="stat-value" id="eth-change">0.00%</div>
                    </div>
                </div>
            </div>
            <!-- F2Pool Market -->
            <div class="dashboard-card">
                <h2>F2Pool Market</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">F2P Price</div>
                        <div class="stat-value" id="f2p-price">$0.00</div>
                    </div>
                    <div>
                        <div class="stat-label">24h Change</div>
                        <div class="stat-value" id="f2p-change">0.00%</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <!-- Wallet -->
            <div class="dashboard-card">
                <h2>Wallet</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">BTC Balance</div>
                        <div class="stat-value" id="btc-balance">0.00000000</div>
                    </div>
                    <div>
                        <div class="stat-label">USD Value</div>
                        <div class="stat-value" id="usd-value">$0.00</div>
                    </div>
                </div>
            </div>
            <!-- Mining Stats -->
            <div class="dashboard-card">
                <h2>Mining Stats</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">Hashrate</div>
                        <div class="stat-value" id="hashrate">0 MH/s</div>
                    </div>
                    <div>
                        <div class="stat-label">Shares</div>
                        <div class="stat-value" id="shares">0</div>
                    </div>
                </div>
            </div>
            <!-- Hardware -->
            <div class="dashboard-card">
                <h2>Hardware</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">Current GPU</div>
                        <div class="stat-value text-blue-400" id="current-gpu">No GPU</div>
                    </div>
                    <div>
                        <div class="stat-label">GPU Temperature</div>
                        <div class="stat-value" id="gpu-temp">0°C</div>
                    </div>
                    <div>
                        <div class="stat-label">Power Draw</div>
                        <div class="stat-value" id="power-draw">0W</div>
                    </div>
                </div>
            </div>
            <!-- Profitability -->
            <div class="dashboard-card">
                <h2>Profitability</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">24h Revenue</div>
                        <div class="stat-value" id="daily-revenue">$0.00</div>
                    </div>
                    <div>
                        <div class="stat-label">Power Cost</div>
                        <div class="stat-value text-red-400" id="power-cost">$0.00</div>
                    </div>
                </div>
            </div>
            <!-- Bitcoin Market -->
            <div class="dashboard-card">
                <h2>Bitcoin Market</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">BTC Price</div>
                        <div class="stat-value" id="btc-price">$0.00</div>
                    </div>
                    <div>
                        <div class="stat-label">24h Change</div>
                        <div class="stat-value" id="btc-change">0.00%</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mining Controls -->
        <div class="dashboard-card mt-4">
            <div class="flex justify-between items-center">
                <button id="start-mining" class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
                    Start Mining
                </button>
                <select id="pool-selection" class="bg-gray-700 rounded px-4 py-2">
                    <option value="nicehash">NiceHash (2% fee, 4hr payout)</option>
                    <option value="ethermine">Ethermine (1% fee, 24hr payout)</option>
                    <option value="f2pool">F2Pool (2.5% fee, 12hr payout)</option>
                </select>
                <button id="gpu-shop" class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                    GPU Shop
                </button>
            </div>
        </div>
        <!-- Performance Charts -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="chart-container">
                <canvas id="hashrate-chart"></canvas>
            </div>
            <div class="chart-container">
                <canvas id="profit-chart"></canvas>
            </div>
        </div>
        <!-- Add this after the charts section -->
        <div class="dashboard-card mt-8">
            <h2 class="text-xl font-bold mb-4">Quick Start Guide</h2>
            <div class="space-y-4 text-gray-300">
                <div class="guide-step">
                    <h3 class="text-green-400 font-bold mb-2">1. Get Your First GPU 🎮</h3>
                    <p>• Click the "GPU Shop" button to open the store</p>
                    <p>• Start with the free GT 1030 - perfect for beginners!</p>
                </div>
                <div class="guide-step">
                    <h3 class="text-green-400 font-bold mb-2">2. Choose a Mining Pool 🌐</h3>
                    <p>• Mining pools combine the power of many miners to find Bitcoin blocks faster</p>
                    <p>• Available pools:</p>
                    <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li><span class="text-white">NiceHash:</span> 2% fee, 4hr payout - Good for beginners, quick payments</li>
                        <li><span class="text-white">Ethermine:</span> 1% fee, 24hr payout - Lower fees, longer wait</li>
                        <li><span class="text-white">F2Pool:</span> 2.5% fee, 12hr payout - Balance of wait time and fees</li>
                    </ul>
                </div>
                <div class="guide-step">
                    <h3 class="text-green-400 font-bold mb-2">3. Start Mining ⛏️</h3>
                    <p>• Click the "Start Mining" button to begin</p>
                    <p>• Watch your hashrate (mining speed) in the charts</p>
                    <p>• Mining earns you Bitcoin (BTC) over time</p>
                    <p>• Shares show successful contributions to your pool</p>
                </div>
                <div class="guide-step">
                    <h3 class="text-green-400 font-bold mb-2">4. Understanding Your Dashboard 📊</h3>
                    <ul class="list-disc list-inside space-y-2">
                        <li><span class="text-white">Wallet:</span> Shows your BTC balance and its USD value</li>
                        <li><span class="text-white">Mining Stats:</span> Your mining speed (hashrate) and successful shares</li>
                        <li><span class="text-white">Hardware:</span> Your GPU model, temperature, and power usage</li>
                        <li><span class="text-white">Profitability:</span> Your earnings and power costs</li>
                        <li><span class="text-white">Bitcoin Market:</span> Current BTC price and market changes</li>
                    </ul>
                </div>
                <div class="guide-step">
                    <h3 class="text-green-400 font-bold mb-2">5. Upgrade Strategy 📈</h3>
                    <p>• Save your mining profits to buy better GPUs</p>
                    <p>• Better GPUs = Higher hashrate = More Bitcoin</p>
                    <p>• Watch your power costs - efficiency matters!</p>
                </div>
                <div class="guide-step mt-4">
                    <h3 class="text-yellow-400 font-bold mb-2">Pro Tips 💡</h3>
                    <ul class="list-disc list-inside space-y-2">
                        <li>Check GPU efficiency (MH/W) when buying new cards</li>
                        <li>Monitor your daily revenue vs power costs</li>
                        <li>More expensive GPUs usually have better efficiency</li>
                        <li>The Bitcoin price affects your USD profits</li>
                        <li>Different pools have different advantages:</li>
                        <ul class="list-circle list-inside ml-4 text-sm">
                            <li>New miners: Start with NiceHash for frequent payouts</li>
                            <li>Experienced miners: Try Ethermine for lower fees</li>
                            <li>Consider switching pools as your operation grows</li>
                        </ul>
                    </ul>
                </div>
                <!-- Add these new sections after the Pro Tips -->
                <div class="guide-step mt-4">
                    <h3 class="text-blue-400 font-bold mb-2">Common Terms 📚</h3>
                    <ul class="list-disc list-inside space-y-2">
                        <li><span class="text-white">Hashrate:</span> Your mining speed - higher is better (measured in MH/s)</li>
                        <li><span class="text-white">Shares:</span> Proof of your mining work submitted to the pool</li>
                        <li><span class="text-white">Power Draw:</span> Electricity used by your GPU (measured in Watts)</li>
                        <li><span class="text-white">Efficiency:</span> Hashrate per Watt (MH/W) - higher means more profitable</li>
                        <li><span class="text-white">Pool Fee:</span> Percentage taken by the mining pool for their service</li>
                    </ul>
                </div>
                <div class="guide-step mt-4">
                    <h3 class="text-purple-400 font-bold mb-2">Troubleshooting 🔧</h3>
                    <ul class="list-disc list-inside space-y-2">
                        <li><span class="text-white">No Profits?</span> Check if mining is actually started and GPU is working</li>
                        <li><span class="text-white">Low Hashrate?</span> Your GPU might be too basic - consider upgrading</li>
                        <li><span class="text-white">High Power Costs?</span> Look for more efficient GPUs or lower electricity rates</li>
                        <li><span class="text-white">No Shares?</span> Make sure your mining pool connection is stable</li>
                    </ul>
                </div>
                <div class="guide-step mt-4">
                    <h3 class="text-orange-400 font-bold mb-2">FAQ ❓</h3>
                    <div class="space-y-3">
                        <div>
                            <p class="text-white">Q: How long until I make profit?</p>
                            <p>A: Depends on your GPU, electricity cost, and Bitcoin price. Better GPUs = faster profits!</p>
                        </div>
                        <div>
                            <p class="text-white">Q: Which GPU should I buy first?</p>
                            <p>A: Start with the free GT 1030, save up for a mid-range GPU like the GTX 1660 SUPER</p>
                        </div>
                        <div>
                            <p class="text-white">Q: Why do pool fees matter?</p>
                            <p>A: Lower fees mean you keep more of your mining rewards, but might have longer payout times</p>
                        </div>
                        <div>
                            <p class="text-white">Q: When should I upgrade my GPU?</p>
                            <p>A: When your daily profits are enough to afford a better GPU within a reasonable time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- GPU Shop Modal -->
    <div id="gpu-shop-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-gray-800 rounded-lg p-6 w-11/12 max-w-4xl max-h-[80vh] overflow-hidden">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-bold">GPU Shop</h2>
                <button id="close-shop" class="text-gray-400 hover:text-white text-3xl">&times;</button>
            </div>
            <div class="overflow-y-auto pr-2" style="max-height: calc(80vh - 100px);">
                <div id="gpu-list" class="grid gap-4">
                    <!-- GPUs will be inserted here -->
                </div>
            </div>
        </div>
    </div>
    <script>
        // Game State
        const gameState = {
            btcBalance: 0,
            usdBalance: 100, // Starting money
            currentGpu: null, // Start with no GPU
            miningActive: false,
            poolFee: 0.02,
            electricityRate: 0.12,
            marketPrice: 40000,
            difficulty: 1,
            shares: 0,
            temperature: 0,
            powerDraw: 0,
            hashrate: 0,
            hashrateHistory: [],
            profitHistory: [],
            btcPrice: {
                current: 65000,  // Starting at current approximate BTC price
                history: [],
                volatility: 0.02,  // 2% volatility
                trend: 0,  // Current price trend
            },
            wallet: {
                btc: 0,
                usd: 100,
            },
        };
        // Initialize charts
        let hashrateChart;
        let profitChart;
        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            initializeCharts();
            setupEventListeners();
            updateDisplay();
            const shopModal = document.getElementById('gpu-shop-modal');
            shopModal.classList.add('hidden'); // Ensure shop is hidden on load
            // Setup shop button click handler
            const shopButton = document.getElementById('gpu-shop');
            shopButton.addEventListener('click', () => {
                shopModal.classList.remove('hidden');
                renderGpuShop(); // Render GPUs when opening shop
            });
            // Setup close button handler
            const closeButton = document.getElementById('close-shop');
            closeButton.addEventListener('click', () => {
                shopModal.classList.add('hidden');
            });
            // Close shop when clicking outside
            shopModal.addEventListener('click', (e) => {
                if (e.target === shopModal) {
                    shopModal.classList.add('hidden');
                }
            });
            // Close on ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    shopModal.classList.add('hidden');
                }
            });
        });
        function initializeCharts() {
            const chartConfig = {
                type: 'line',
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    }
                }
            };
            // Hashrate Chart
            hashrateChart = new Chart(
                document.getElementById('hashrate-chart').getContext('2d'),
                {
                    ...chartConfig,
                    data: {
                        labels: [],
                        datasets: [{
                            label: 'Hashrate (MH/s)',
                            data: [],
                            borderColor: '#00ff00',
                            backgroundColor: 'rgba(0, 255, 0, 0.1)',
                            borderWidth: 3,
                            fill: true
                        }]
                    }
                }
            );
            // Profit Chart
            profitChart = new Chart(
                document.getElementById('profit-chart').getContext('2d'),
                {
                    ...chartConfig,
                    data: {
                        labels: [],
                        datasets: [{
                            label: 'Profit (USD)',
                            data: [],
                            borderColor: '#00ffff',
                            backgroundColor: 'rgba(0, 255, 255, 0.1)',
                            borderWidth: 3,
                            fill: true
                        }]
                    }
                }
            );
        }
        function setupEventListeners() {
            // Mining button
            const mineButton = document.getElementById('start-mining');
            mineButton.addEventListener('click', toggleMining);
            // Shop button
            const shopButton = document.getElementById('gpu-shop');
            shopButton.addEventListener('click', () => {
                document.getElementById('gpu-shop-modal').classList.remove('hidden');
                renderGpuShop();
            });
            // Close shop button
            const closeShopButton = document.getElementById('close-shop');
            closeShopButton.addEventListener('click', () => {
                document.getElementById('gpu-shop-modal').classList.add('hidden');
            });
        }
        function toggleMining() {
            if (!gameState.currentGpu) {
                alert('Please purchase a GPU first!');
                return;
            }
            gameState.miningActive = !gameState.miningActive;
            const mineButton = document.getElementById('start-mining');
            if (gameState.miningActive) {
                mineButton.textContent = 'Stop Mining';
                mineButton.className = 'bg-red-500 hover:bg-red-600 px-4 py-2 rounded';
                startMining();
            } else {
                mineButton.textContent = 'Start Mining';
                mineButton.className = 'bg-green-500 hover:bg-green-600 px-4 py-2 rounded';
                stopMining();
            }
        }
        function startMining() {
            if (!window.miningInterval) {
                window.miningInterval = setInterval(() => {
                    calculateMining();
                    updateDisplay();
                    updateCharts();
                }, 1000);
            }
        }
        function stopMining() {
            if (window.miningInterval) {
                clearInterval(window.miningInterval);
                window.miningInterval = null;
            }
        }
        function calculateMining() {
            if (!gameState.currentGpu) return;
            // Calculate mining rewards
            const hashPower = gameState.currentGpu.hashRate;
            gameState.hashrate = hashPower;
            // Simulate finding shares
            if (Math.random() < hashPower / gameState.difficulty / 1000) {
                gameState.shares++;
                gameState.btcBalance += (6.25 / 100000) * (1 - gameState.poolFee); // Simplified BTC reward
            }
            // Update temperature and power
            gameState.temperature = Math.min(90, 40 + Math.random() * 30);
            gameState.powerDraw = gameState.currentGpu.powerConsumption * (1 + Math.random() * 0.1);
            // Calculate power cost
            const hourlyPowerCost = (gameState.powerDraw / 1000) * gameState.electricityRate;
            gameState.usdBalance -= hourlyPowerCost / 3600;
        }
        function updateCharts() {
            if (!gameState.miningActive) return;
            const now = new Date().toLocaleTimeString();
            // Update hashrate data
            hashrateChart.data.labels.push(now);
            hashrateChart.data.datasets[0].data.push(gameState.hashrate);
            // Update profit data
            const currentProfit = gameState.btcBalance * gameState.marketPrice;
            profitChart.data.labels.push(now);
            profitChart.data.datasets[0].data.push(currentProfit);
            // Keep only last 10 points
            if (hashrateChart.data.labels.length > 10) {
                hashrateChart.data.labels.shift();
                hashrateChart.data.datasets[0].data.shift();
                profitChart.data.labels.shift();
                profitChart.data.datasets[0].data.shift();
            }
            // Update both charts
            hashrateChart.update();
            profitChart.update();
        }
        function renderGpuShop() {
            const gpuListElement = document.getElementById('gpu-list');
            gpuListElement.innerHTML = '';
            // Define categories
            const categories = {
                'Free Starter GPU': gpuList.filter(gpu => gpu.price === 0),
                '💎 Budget GPUs ($50-500)': gpuList.filter(gpu => gpu.price > 0 && gpu.price <= 500),
                '💎 Mid-Range GPUs ($500-1500)': gpuList.filter(gpu => gpu.price > 500 && gpu.price <= 1500),
                '💎 High-End GPUs ($1500-3000)': gpuList.filter(gpu => gpu.price > 1500 && gpu.price <= 3000),
                '💎 Premium GPUs ($3000+)': gpuList.filter(gpu => gpu.price > 3000)
            };
            // Create sections for each category
            Object.entries(categories).forEach(([categoryName, gpus]) => {
                if (gpus.length === 0) return; // Skip empty categories
                // Add category header
                const categoryHeader = document.createElement('div');
                categoryHeader.className = 'text-xl font-bold mb-4 mt-6';
                // Set header color based on category
                let headerColor;
                if (categoryName.includes('Free')) headerColor = 'text-green-400';
                else if (categoryName.includes('Budget')) headerColor = 'text-blue-400';
                else if (categoryName.includes('Mid-Range')) headerColor = 'text-purple-400';
                else if (categoryName.includes('High-End')) headerColor = 'text-orange-400';
                else headerColor = 'text-red-400';
                categoryHeader.className += ` ${headerColor}`;
                categoryHeader.innerHTML = categoryName;
                gpuListElement.appendChild(categoryHeader);
                // Add divider line
                const divider = document.createElement('div');
                divider.className = `border-b ${headerColor.replace('text', 'border')} mb-4`;
                gpuListElement.appendChild(divider);
                // Add GPUs in this category
                gpus.forEach(gpu => {
                    // Your existing GPU card creation code here
                    const dailyRevenue = calculateDailyRevenue(gpu);
                    const dailyPowerCost = calculateDailyPowerCost(gpu);
                    const dailyProfit = dailyRevenue - dailyPowerCost;
                    const roi = gpu.price / dailyProfit;
                    const gpuCard = document.createElement('div');
                    gpuCard.className = 'gpu-card mb-4';
                    // Rest of your existing card HTML...
                    gpuCard.innerHTML = `
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <h3 class="text-lg font-bold ${headerColor}">${gpu.name}</h3>
                                <div class="grid grid-cols-2 gap-4 mt-2">
                                    <div class="text-sm">
                                        <p class="text-gray-400">Performance</p>
                                        <p class="text-white">⚡ ${gpu.hashRate} MH/s</p>
                                        <p class="text-white">🔌 ${gpu.powerConsumption}W</p>
                                        <p class="text-white">🌡️ ${gpu.temp}°C</p>
                                    </div>
                                    <div class="text-sm">
                                        <p class="text-gray-400">Daily Estimates</p>
                                        <p class="text-green-400">💰 $${dailyRevenue.toFixed(2)}</p>
                                        <p class="text-red-400">💡 -$${dailyPowerCost.toFixed(2)}</p>
                                        <p class="text-blue-400">📈 $${dailyProfit.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div class="mt-2 text-sm">
                                    <p class="text-gray-400">Efficiency: ${gpu.efficiency.toFixed(3)} MH/W</p>
                                    <p class="text-gray-400">ROI: ${roi.toFixed(1)} days</p>
                                </div>
                            </div>
                            <div class="text-right ml-4">
                                <p class="text-xl font-bold ${headerColor}">
                                    ${gpu.price === 0 ? 'FREE' : '$' + gpu.price.toLocaleString()}
                                </p>
                                <button onclick="buyGpu(${gpuList.indexOf(gpu)})" 
                                        class="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded mt-2">
                                    ${gpu.price === 0 ? 'Get Free' : 'Buy'}
                                </button>
                            </div>
                        </div>
                    `;
                    gpuListElement.appendChild(gpuCard);
                });
            });
        }
        function buyGpu(index) {
            const gpu = gpuList[index];
            if (gameState.usdBalance >= gpu.price) {
                gameState.usdBalance -= gpu.price;
                gameState.currentGpu = gpu;
                document.getElementById('gpu-shop-modal').classList.add('hidden');
                document.getElementById('current-gpu').textContent = gpu.name;
                updateDisplay();
                alert(`Successfully acquired ${gpu.name}!`);
            } else {
                alert('Insufficient funds!');
            }
        }
        function updateDisplay() {
            document.getElementById('btc-balance').textContent = gameState.btcBalance.toFixed(8);
            document.getElementById('usd-value').textContent = `$${(gameState.btcBalance * gameState.marketPrice).toFixed(2)}`;
            document.getElementById('hashrate').textContent = `${gameState.currentGpu ? gameState.currentGpu.hashRate.toFixed(2) : '0'} MH/s`;
            document.getElementById('shares').textContent = gameState.shares;
            document.getElementById('gpu-temp').textContent = `${gameState.temperature.toFixed(1)}°C`;
            document.getElementById('power-draw').textContent = `${gameState.powerDraw.toFixed(0)}W`;
            // Calculate daily estimates
            if (gameState.currentGpu) {
                const dailyBtc = (gameState.btcBalance * 24);
                const dailyRevenue = dailyBtc * gameState.marketPrice;
                const dailyPowerCost = (gameState.powerDraw / 1000) * gameState.electricityRate * 24; 
                document.getElementById('daily-revenue').textContent = `$${dailyRevenue.toFixed(2)}`;
                document.getElementById('power-cost').textContent = `$${dailyPowerCost.toFixed(2)}`;
            }
        }
        // Market price updates
        setInterval(() => {
            gameState.marketPrice *= (1 + (Math.random() * 0.002 - 0.001));
            gameState.difficulty *= (Math.random() < 0.1) ? (1 + (Math.random() * 0.1 - 0.05)) : 1;
            if (gameState.miningActive) updateDisplay();
        }, 5000);
        // Add mining profitability calculation
        function updateMiningProfitability() {
            if (!gameState.currentGpu) return;
            const btcPrice = gameState.btcPrice.current;
            const hashrate = gameState.currentGpu.hashRate;
            const powerCost = (gameState.currentGpu.powerConsumption / 1000) * gameState.electricityRate * 24;
            // Calculate daily BTC mining estimate
            const dailyBtc = (hashrate * 86400) / (gameState.difficulty * 1e12);
            const dailyRevenue = dailyBtc * btcPrice;
            const dailyProfit = dailyRevenue - powerCost;
            // Update UI
            document.getElementById('btc-price').textContent = `$${btcPrice.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
            document.getElementById('daily-revenue').textContent = `$${dailyRevenue.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
            document.getElementById('daily-profit').textContent = `$${dailyProfit.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
        }
        const gpuList = [
            // Free Starter GPU
            { 
                name: "NVIDIA GeForce GT 1030", 
                price: 0, 
                hashRate: 1.5,         // MH/s
                powerConsumption: 30,  // Watts
                efficiency: 0.05,      // MH/s per watt
                temp: 65              // °C
            },
            // Budget GPUs ($50-500)
            { 
                name: "NVIDIA GeForce GTX 1050", 
                price: 150, 
                hashRate: 14, 
                powerConsumption: 75,
                efficiency: 0.19,
                temp: 67
            },
            { 
                name: "AMD RX 570 8GB", 
                price: 250, 
                hashRate: 28, 
                powerConsumption: 120,
                efficiency: 0.23,
                temp: 70
            },
            { 
                name: "NVIDIA GeForce GTX 1060 6GB", 
                price: 400, 
                hashRate: 22, 
                powerConsumption: 120,
                efficiency: 0.18,
                temp: 68
            },
            // Mid-Range GPUs ($500-1500)
            { 
                name: "NVIDIA GeForce GTX 1660 SUPER", 
                price: 800, 
                hashRate: 31, 
                powerConsumption: 125,
                efficiency: 0.25,
                temp: 69
            },
            { 
                name: "AMD RX 5600 XT", 
                price: 1000, 
                hashRate: 40, 
                powerConsumption: 150,
                efficiency: 0.27,
                temp: 71
            },
            { 
                name: "NVIDIA RTX 2060", 
                price: 1200, 
                hashRate: 32, 
                powerConsumption: 160,
                efficiency: 0.20,
                temp: 70
            },
            { 
                name: "NVIDIA RTX 2070", 
                price: 1400, 
                hashRate: 42, 
                powerConsumption: 175,
                efficiency: 0.24,
                temp: 71
            },
            // High-End GPUs ($1500-3000)
            { 
                name: "NVIDIA RTX 3060 Ti", 
                price: 1700, 
                hashRate: 60, 
                powerConsumption: 200,
                efficiency: 0.30,
                temp: 70
            },
            { 
                name: "NVIDIA RTX 3070", 
                price: 2000, 
                hashRate: 62, 
                powerConsumption: 220,
                efficiency: 0.28,
                temp: 71
            },
            { 
                name: "NVIDIA RTX 3080", 
                price: 2300, 
                hashRate: 64, 
                powerConsumption: 300,
                efficiency: 0.21,
                temp: 73
            },
            { 
                name: "NVIDIA RTX 3090", 
                price: 2800, 
                hashRate: 98, 
                powerConsumption: 320,
                efficiency: 0.31,
                temp: 72
            },
            // Premium GPUs ($3000+)
            { 
                name: "NVIDIA RTX 4070", 
                price: 3200, 
                hashRate: 100, 
                powerConsumption: 285,
                efficiency: 0.35,
                temp: 71
            },
            { 
                name: "AMD RX 7900 XTX", 
                price: 3500, 
                hashRate: 110, 
                powerConsumption: 355,
                efficiency: 0.31,
                temp: 73
            },
            { 
                name: "NVIDIA RTX 4080", 
                price: 3800, 
                hashRate: 130, 
                powerConsumption: 320,
                efficiency: 0.41,
                temp: 73
            },
            { 
                name: "NVIDIA RTX 4090", 
                price: 4000, 
                hashRate: 140, 
                powerConsumption: 450,
                efficiency: 0.31,
                temp: 75
            }
        ];
        // Helper functions for calculations
        function calculateDailyRevenue(gpu) {
            const btcPerDay = (gpu.hashRate * 86400) / (gameState.difficulty * 1e12);
            return btcPerDay * gameState.btcPrice.current;
        }
        function calculateDailyPowerCost(gpu) {
            const dailyKwh = (gpu.powerConsumption * 24) / 1000;
            return dailyKwh * gameState.electricityRate;
        }
        // Bitcoin Market Functions
        async function updateBitcoinPrice() {
            try {
                // Using CoinGecko API for real Bitcoin price data
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true', {
                    // Add CORS headers
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                const data = await response.json();
                // Format the price with commas and 2 decimal places
                const formattedPrice = data.bitcoin.usd.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                // Update BTC Price - Fixed template literal syntax
                const btcPriceElement = document.getElementById('btc-price');
                if (btcPriceElement) {
                    btcPriceElement.textContent = `$${formattedPrice}`; // Fixed backticks
                }
                // Update 24h Change - Fixed template literal syntax
                const changeElement = document.getElementById('btc-change');
                if (changeElement) {
                    const changeValue = data.bitcoin.usd_24h_change.toFixed(2);
                    changeElement.textContent = `${changeValue}%`; // Fixed backticks
                    // Add color based on price change
                    if (data.bitcoin.usd_24h_change > 0) {
                        changeElement.style.color = '#2ecc71'; // Green for positive
                    } else {
                        changeElement.style.color = '#e74c3c'; // Red for negative
                    }
                }
                // Update game state with new BTC price
                gameState.marketPrice = data.bitcoin.usd;
            } catch (error) {
                console.error('Error updating Bitcoin price:', error);
                // Fallback values if API fails
                const btcPriceElement = document.getElementById('btc-price');
                const changeElement = document.getElementById('btc-change');
                if (btcPriceElement) btcPriceElement.textContent = '$45,000.00';
                if (changeElement) {
                    changeElement.textContent = '0.00%';
                    changeElement.style.color = '#ffffff';
                }
            }
        }
        // Update price every 30 seconds
        setInterval(updateBitcoinPrice, 30000);
        // Initial price update when page loads
        document.addEventListener('DOMContentLoaded', updateBitcoinPrice);
        // NiceHash Market Function with fallback
        async function updateNiceHashPrice() {
            try {
                // Try primary endpoint first
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=nicehash-token&vs_currencies=usd&include_24hr_change=true', {
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                // If response isn't ok, throw error to trigger fallback
                if (!response.ok) {
                    throw new Error('NiceHash API response not ok');
                }
                const data = await response.json();
                // If data is empty or missing expected values, throw error
                if (!data['nicehash-token'] || !data['nicehash-token'].usd) {
                    throw new Error('Invalid NiceHash data format');
                }
                const formattedPrice = data['nicehash-token'].usd.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                const priceElement = document.getElementById('nice-price');
                if (priceElement) {
                    priceElement.textContent = `$${formattedPrice}`;
                }
                const changeElement = document.getElementById('nice-change');
                if (changeElement) {
                    const changeValue = data['nicehash-token'].usd_24h_change.toFixed(2);
                    changeElement.textContent = `${changeValue}%`;
                    changeElement.style.color = data['nicehash-token'].usd_24h_change > 0 ? '#2ecc71' : '#e74c3c';
                }
            } catch (error) {
                console.error('Error updating NiceHash price:', error);
                // Try alternate endpoint or use fallback value
                try {
                    // Alternative API endpoint for NiceHash data
                    const fallbackResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
                    const fallbackData = await fallbackResponse.json();
                    // Use a calculated value based on BTC price (example: 0.0001 * BTC price)
                    const estimatedPrice = (fallbackData.bitcoin.usd * 0.0001).toFixed(2);
                    const priceElement = document.getElementById('nice-price');
                    if (priceElement) {
                        priceElement.textContent = `$${estimatedPrice}`;
                    }
                    const changeElement = document.getElementById('nice-change');
                    if (changeElement) {
                        const changeValue = fallbackData.bitcoin.usd_24h_change.toFixed(2);
                        changeElement.textContent = `${changeValue}%`;
                        changeElement.style.color = fallbackData.bitcoin.usd_24h_change > 0 ? '#2ecc71' : '#e74c3c';
                    }
                } catch (fallbackError) {
                    // If all else fails, use static fallback values
                    const priceElement = document.getElementById('nice-price');
                    const changeElement = document.getElementById('nice-change');
                    if (priceElement) priceElement.textContent = '$5.00';  // Static fallback price
                    if (changeElement) {
                        changeElement.textContent = '0.00%';
                        changeElement.style.color = '#ffffff';
                    }
                }
            }
        }
        // Ethereum Market Function
        async function updateEthereumPrice() {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true', {
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                const data = await response.json();
                const formattedPrice = data.ethereum.usd.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                const priceElement = document.getElementById('eth-price');
                if (priceElement) {
                    priceElement.textContent = `$${formattedPrice}`;
                }
                const changeElement = document.getElementById('eth-change');
                if (changeElement) {
                    const changeValue = data.ethereum.usd_24h_change.toFixed(2);
                    changeElement.textContent = `${changeValue}%`;
                    changeElement.style.color = data.ethereum.usd_24h_change > 0 ? '#2ecc71' : '#e74c3c';
                }
            } catch (error) {
                console.error('Error updating Ethereum price:', error);
                const priceElement = document.getElementById('eth-price');
                const changeElement = document.getElementById('eth-change');
                if (priceElement) priceElement.textContent = '$0.00';
                if (changeElement) {
                    changeElement.textContent = '0.00%';
                    changeElement.style.color = '#ffffff';
                }
            }
        }
        // F2Pool Market Function
        async function updateF2PoolPrice() {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ftx-token&vs_currencies=usd&include_24hr_change=true', {
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                const data = await response.json();
                const formattedPrice = data['ftx-token'].usd.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                const priceElement = document.getElementById('f2p-price');
                if (priceElement) {
                    priceElement.textContent = `$${formattedPrice}`;
                }
                const changeElement = document.getElementById('f2p-change');
                if (changeElement) {
                    const changeValue = data['ftx-token'].usd_24h_change.toFixed(2);
                    changeElement.textContent = `${changeValue}%`;
                    changeElement.style.color = data['ftx-token'].usd_24h_change > 0 ? '#2ecc71' : '#e74c3c';
                }
            } catch (error) {
                console.error('Error updating F2Pool price:', error);
                const priceElement = document.getElementById('f2p-price');
                const changeElement = document.getElementById('f2p-change');
                if (priceElement) priceElement.textContent = '$0.00';
                if (changeElement) {
                    changeElement.textContent = '0.00%';
                    changeElement.style.color = '#ffffff';
                }
            }
        }
        // Add these lines right after your Bitcoin price update interval
        setInterval(updateNiceHashPrice, 30000);
        setInterval(updateEthereumPrice, 30000);
        setInterval(updateF2PoolPrice, 30000);
        // Add these to your DOMContentLoaded event
        document.addEventListener('DOMContentLoaded', () => {
            updateNiceHashPrice();
            updateEthereumPrice();
            updateF2PoolPrice();
        });
    </script>
</body>
</html>
