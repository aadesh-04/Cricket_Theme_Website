document.addEventListener('DOMContentLoaded', function() {
    const matches = document.querySelectorAll('.match');
    matches.forEach(match => {
        const matchDate = new Date(match.dataset.date);
        const countdownElement = match.querySelector('.countdown');

        function updateCountdown() {
            const now = new Date();
            const timeRemaining = matchDate - now;
            if (timeRemaining < 0) {
                countdownElement.innerText = "Match Started!";
                clearInterval(countdownInterval);
                return;
            }

            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElement.innerText = `${hours}h ${minutes}m ${seconds}s`;
        }

        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
    });
});
