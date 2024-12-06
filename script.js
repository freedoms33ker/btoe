// script.js

// Function to mark elements with "X" and log their details
function markElement(element) {
    // Toggle "marked" class
    element.classList.toggle("marked");

    // Get element details
    const code = element.getAttribute("data-code");
    const value = element.getAttribute("data-value");
    const name = element.querySelector(".name").innerText;

    // Update log
    const log = document.getElementById("log");
    const existingLog = Array.from(log.children).find(li => li.dataset.code === code);

    if (existingLog) {
        // Remove log entry if unmarked
        existingLog.remove();
    } else {
        // Add log entry
        const logEntry = document.createElement("li");
        logEntry.dataset.code = code;
        logEntry.innerText = `${name} (Code: ${code}, Value: ${value}) marked.`;
        log.appendChild(logEntry);
    }
}
