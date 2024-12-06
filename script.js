document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    const logList = document.getElementById('log');
    const newLogButton = document.getElementById('new-log');

    // Click handler for elements
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            const code = element.dataset.code;
            const value = element.dataset.value;

            // Mark the element with an X
            if (!element.classList.contains('marked')) {
                element.classList.add('marked');
                logList.innerHTML += `<li>Marked ${code} (Value: ${value})</li>`;
            }
        });
    });

    // New Log Button: Reset all elements
    newLogButton.addEventListener('click', () => {
        elements.forEach((element) => element.classList.remove('marked'));
        logList.innerHTML = '';
    });
});
