---
layout: post
categories: [Hacks]
title: Calculator
description:  Calculator
type: issues 
permalink: /calculator
comments: true
hide: true
---

<html>
<head>
    <title>JavaScript Calculator</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.6.4/math.min.js"
        integrity="sha512-iphNRh6dPbeuPGIrQbCdbBF/qcqadKWLa35YPVfMZMHBSI6PLJh1om2xCTWhpVpmUyb4IvVS9iYnnYMkleVXLA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"></script>
    <style>
        body {
            background-color: #f2f2f2;
            font-family: Arial, sans-serif;
        }
        table {
            border: 1px solid #333;
            margin-left: auto;
            margin-right: auto;
            border-radius: 10px;
            overflow: hidden;
        }
        input[type="button"] {
            width: 100%;
            padding: 20px;
            background-color: #4CAF50; /* Base color */
            color: white;
            font-size: 20px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            transition: box-shadow 0.3s ease, background-color 0.3s ease;
        }
        input[type="button"]:hover {
            box-shadow: 0 0 10px #88bc4c; /* Glow effect */
            background-color: #88bc4c; /* Darker green for hover */
        }
        input[type="text"] {
            padding: 20px;
            font-size: 28px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            border: 2px solid #333;
            text-align: right;
            background-color: #fff;
        }
        #history {
            border: 1px solid #333;
            margin: 20px auto;
            padding: 10px;
            width: 80%;
            max-height: 200px;
            overflow-y: auto;
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
        #history p {
            margin: 5px 0;
            font-size: 18px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
            color: #6e9a41; /* Darker green text color */
        }
        #history p:last-child {
            border-bottom: none;
        }
        #history p::before {
            content: "✓ ";
            color: #88bc4c; /* Green checkmark */
        }
    </style>
</head>
<body>
    <table id="calcu">
        <tr>
            <td colspan="4"><input type="text" id="result" readonly></td>
        </tr>
        <tr>
            <td><input type="button" value="c" onclick="clr()"></td>
            <td><input type="button" value="√" onclick="dis('sqrt(')"></td>
            <td><input type="button" value="%" onclick="dis('%')"></td>
            <td><input type="button" value="^" onclick="dis('^')"></td>
        </tr>
        <tr>
            <td><input type="button" value="1" onclick="dis('1')"></td>
            <td><input type="button" value="2" onclick="dis('2')"></td>
            <td><input type="button" value="3" onclick="dis('3')"></td>
            <td><input type="button" value="/" onclick="dis('/')"></td>
        </tr>
        <tr>
            <td><input type="button" value="4" onclick="dis('4')"></td>
            <td><input type="button" value="5" onclick="dis('5')"></td>
            <td><input type="button" value="6" onclick="dis('6')"></td>
            <td><input type="button" value="*" onclick="dis('*')"></td>
        </tr>
        <tr>
            <td><input type="button" value="7" onclick="dis('7')"></td>
            <td><input type="button" value="8" onclick="dis('8')"></td>
            <td><input type="button" value="9" onclick="dis('9')"></td>
            <td><input type="button" value="-" onclick="dis('-')"></td>
        </tr>
        <tr>
            <td><input type="button" value="0" onclick="dis('0')"></td>
            <td><input type="button" value="." onclick="dis('.')"></td>
            <td><input type="button" value="=" onclick="solve()"></td>
            <td><input type="button" value="+" onclick="dis('+')"></td>
        </tr>
    </table>
    <!-- History Section -->
    <div id="history"></div>
    <script>
        // Function that displays value 
        function dis(val) {
            document.getElementById("result").value += val;
        }
        function myFunction(event) {
            if (event.key == '0' || event.key == '1'
                || event.key == '2' || event.key == '3'
                || event.key == '4' || event.key == '5'
                || event.key == '6' || event.key == '7'
                || event.key == '8' || event.key == '9'
                || event.key == '+' || event.key == '-'
                || event.key == '*' || event.key == '/'
                || event.key == '^' || event.key == '%'
                || event.key == 'Enter') {
                if (event.key == 'Enter') {
                    solve();
                } else {
                    document.getElementById("result").value += event.key;
                }
            }
        }
        var cal = document.getElementById("calcu");
        cal.onkeyup = function (event) {
            if (event.keyCode === 13) {
                solve();
            }
        }
        // Function that evaluates the digit and returns result 
        function solve() {
            let x = document.getElementById("result").value;
            // Replace ^ with ** for exponentiation
            x = x.replace(/\^/g, '**');
            // Replace sqrt( with math.sqrt( for square roots
            x = x.replace(/sqrt\(/g, 'math.sqrt(');
            try {
                let y = math.evaluate(x);
                document.getElementById("result").value = y;
                // Add result to history
                addHistory(x + ' = ' + y);
            } catch (error) {
                document.getElementById("result").value = "Error";
            }
        }
        // Function to clear the display 
        function clr() {
            document.getElementById("result").value = "";
        }
        // Function to add calculation to history
        function addHistory(entry) {
            var historyDiv = document.getElementById("history");
            var p = document.createElement("p");
            p.textContent = entry;
            historyDiv.appendChild(p);
            historyDiv.scrollTop = historyDiv.scrollHeight; // Scroll to the bottom
        }
    </script>
</body>
</html>