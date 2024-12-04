document.addEventListener("DOMContentLoaded", () => {
  let totalScore = 0; // Initialize total score
  const scoreDisplay = document.getElementById("clickCount"); // Score display
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
  }

  // Add event listeners to all table elements
  document.querySelectorAll(".element").forEach((element) => {
    element.addEventListener("click", () => {
      const value = parseFloat(element.dataset.value);
      const elementName = element.querySelector(".name").textContent;

      // Toggle selection
      if (element.classList.toggle("selected")) {
        totalScore += value;
        logAction("Added", elementName, value);
      } else {
        totalScore -= value;
        logAction("Removed", elementName, value);
      }

      updateScore();
    });
  });

  // Add a new section in the log
  document.getElementById("new-section-btn").addEventListener("click", () => {
    const separator = document.createElement("hr");
    logSection.appendChild(separator);
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

