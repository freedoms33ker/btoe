document.addEventListener("DOMContentLoaded", () => {
  let totalScore = 0;
  const scoreDisplay = document.getElementById("clickCount");
  const logSection = document.getElementById("log");

  function updateScore() {
    scoreDisplay.textContent = totalScore.toFixed(2);
  }

  function logAction(action, elementName, value) {
    const logEntry = document.createElement("div");
    logEntry.textContent = `${action}: ${elementName} (Value: ${value})`;
    logSection.appendChild(logEntry);
  }

  document.querySelectorAll(".element").forEach((element) => {
    element.addEventListener("click", () => {
      const value = parseFloat(element.dataset.value);
      const elementName = element.querySelector(".name").textContent;

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

  document.getElementById("new-section-btn").addEventListener("click", () => {
    const separator = document.createElement("hr");
    logSection.appendChild(separator);
  });

  document.getElementById("copy-btn").addEventListener("click", () => {
    const logText = Array.from(logSection.children)
      .map((child) => child.textContent)
      .join("\n");
    navigator.clipboard.writeText(logText).then(() => alert("Log copied!"));
  });

  updateScore();
});
