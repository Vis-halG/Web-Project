// Set the end date (March 20, 2024, 04:00:00)
const endDate = new Date('2024-03-18 04:00:00').getTime();

// Update the countdown every second
const interval = setInterval(() => {
    // Get current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = endDate - now;

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);

    // If the countdown is over, stop the timer
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}, 1000);

// Function to add leading zero if needed
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}