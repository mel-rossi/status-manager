// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---

// Change text dynamically when page loads
mainTitle.innerHTML = "DOM Project: Ready!"; 

/* ======================================= */
// --- Task 4: Attribute Modification ---

// Add custom attributes to existing elements
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---

// Highlight Items Functionn (Task 9)
function highlightListItems() {
    const listItems = document.querySelectorAll("li");

    listItems.forEach(item => {
        item.style.color = "blue"; 
    });
}

// Run once page loads
highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---

// Helper Function - Timesteamp creation (Task 8)
function createTimestamp() { 
    const span = document.createElement("span");

    span.innerHTML = new Date().toLocaleTimeString(); 
    statusOutput.appendChild(span);

    statusOutput.appendChild(document.createElement("br")); // Add line break between each timestamp
}

// Toggle Function (Task 5)
function toggleStatus(e) { 
    // Prevent anchor tag from refreshing page (Task 6)
    e.preventDefault(); 

    // Toggle .hidden class on status output div (Task 5)
    statusOutput.classList.toggle("hidden");

    // Check visibility and set or reset background color of main title (Task 7)
    if (!statusOutput.classList.contains("hidden")) { // Status visible 
        mainTitle.style.backgroundColor = "yellow"; 

        // Append timestamp when status is visible (Task 8)
        createTimestamp();

    } else { // Status hidden 
        mainTitle.style.backgroundColor = "";
    }
}

// Bind toggleStatus to toggle button's click event (Task 5)
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---

// Start Flashing Function
function startFlashing() { // Toggle .hidden on control-panel every 500ms
    if (intervalId !== null) return; // Guard (against stacking intervals - exactly .5 sec flash)

    intervalId = setInterval(() => {
        controlPanel.classList.toggle("hidden");
    }, 500);
} 

// Stop Flashing Function 
function stopFlashing() { // Clear interval and ensures control-panel is visible
    clearInterval(intervalId);
    intervalId = null;
    controlPanel.classList.remove("hidden");
}

// Bind startFlashing to timer button's click event 
timerButton.addEventListener("click", startFlashing);

// Bind stopFlashing to timer button's double click event 
timerButton.addEventListener("dblclick", stopFlashing);