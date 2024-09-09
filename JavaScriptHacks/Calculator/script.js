// Function that displays value 
function dis(val) {
    document.getElementById("result").value += val;
}

// Function to handle keyboard input
function myFunction(event) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '^', '%', 'Enter'];
    if (allowedKeys.includes(event.key)) {
        if (event.key === 'Enter') {
            solve();
        } else {
            dis(event.key);
        }
    }
}

// Attach keyboard event listener
document.addEventListener('keydown', myFunction);

// Function that evaluates the expression and returns result 
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
