document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    const logList = document.getElementById('log');
    const resetButton = document.getElementById('reset-button');
    const btoeScoreContainer = document.getElementById('btoe-score');
    const copyButton = document.getElementById("copy-btn");


    // Click handler for elements
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            const code = element.dataset.code;
            const value = element.dataset.value;

            // Mark the element with an X
            if (!element.classList.contains('marked')) {
                element.classList.add('marked');
                logList.innerHTML += `<li>Marked ${code} (Value: ${value})</li>`;
                const currentBTOEScore = parseFloat(btoeScoreContainer.innerHTML);
                const currentValue = parseFloat(value, 10);
                btoeScoreContainer.innerHTML = (currentBTOEScore + currentValue).toString();

            }
        });
    });

    // New Log Button: Reset all elements
    resetButton.addEventListener('click', () => {
        elements.forEach((element) => element.classList.remove('marked'));
        logList.innerHTML = '';
        btoeScoreContainer.innerHTML = "0";
    });

});
