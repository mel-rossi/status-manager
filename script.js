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
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---

// Helper Function - Timesteamp creation 
// function createTimestamp()

// Toggle Function (Task 5)
function toggleStatus(e) { 
    // Prevent anchor tag from refreshing page (Task 6)
    e.preventDefault(); 

    // Toggle .hidden class on status output div (Task 5)
    statusOutput.classList.contains("hidden");

    // Check visibility and set or reset background color of main title (Task 7)
    if (!statusOutput.classList.contains("hidden")) { // Status visible 
        mainTitle.style.backgroundColor = "yellow"; 

        // Call createTimestamp 
        
    } else { // Status hidden 
        mainTitle.style.backgroundColor = "";
    }
}

// Bind toggleStatus to toggle button's click event (Task 5)
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
