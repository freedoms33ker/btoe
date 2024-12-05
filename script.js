document.addEventListener("DOMContentLoaded", () => {
  let totalScore = 0; // Initialize total score
  const scoreDisplay = document.getElementById("clickCount"); // Display for current score
  const logSection = document.getElementById("log"); // Log container

  // Function to update the displayed score
  function updateScore() {
    scoreDisplay.textContent = totalScore.toFixed(2);
  }

  // Function to log actions
  function logAction(action, elementName, value) {
    const logEntry = document.createElement("div");
    logEntry.textContent = `${action}: ${elementName} (Value: ${value})`;
    logSection.appendChild(logEntry);
    logSection.scrollTop = logSection.scrollHeight; // Auto-scroll to the latest log
  }

  // Add event listeners to all table elements
  document.querySelectorAll(".element").forEach((element) => {
    element.addEventListener("click", () => {
      const value = parseFloat(element.dataset.value); // Retrieve element's value
      const elementName = element.querySelector(".name").textContent; // Retrieve element's name

      // Toggle selection
      if (element.classList.toggle("selected")) {
        totalScore += value; // Add value to total score
        logAction("Added", elementName, value); // Log the addition
      } else {
        totalScore -= value; // Subtract value from total score
        logAction("Removed", elementName, value); // Log the removal
      }

      updateScore(); // Update the displayed score
    });
  });

  // Add a new section in the log
  document.getElementById("new-section-btn").addEventListener("click", () => {
    const separator = document.createElement("hr");
    logSection.appendChild(separator);
    logAction("New Section", "---", "0");
  });

  // Copy log to clipboard
  document.getElementById("copy-btn").addEventListener("click", () => {
    const logText = Array.from(logSection.children)
      .map((child) => child.textContent)
      .join("\n");
    navigator.clipboard.writeText(logText).then(() => {
      alert("Log copied to clipboard!");
    });
  });

  // Initialize the score display
  updateScore();
});
