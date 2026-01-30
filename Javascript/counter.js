// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set the end date (24 hours from now for demo purposes)
    // You can change this to any specific date you want
    const now = new Date();
    const endDate = new Date(now.getTime() + (24 * 60 * 60 * 1000)).getTime();
    
    // Alternative: Set a specific date
    // const endDate = new Date('2026-02-15 23:59:59').getTime();

    // Function to add leading zero if needed
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

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

        // Get elements
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        // Check if elements exist before updating
        if (hoursElement && minutesElement && secondsElement) {
            // Display the countdown
            hoursElement.textContent = formatTime(hours);
            minutesElement.textContent = formatTime(minutes);
            secondsElement.textContent = formatTime(seconds);
        }

        // If the countdown is over, stop the timer
        if (distance < 0) {
            clearInterval(interval);
            if (hoursElement && minutesElement && secondsElement) {
                hoursElement.textContent = '00';
                minutesElement.textContent = '00';
                secondsElement.textContent = '00';
            }
        }
    }, 1000);

    // Run immediately to avoid initial delay
    const initialNow = new Date().getTime();
    const initialDistance = endDate - initialNow;
    const initialHours = Math.floor(initialDistance / (1000 * 60 * 60));
    const initialMinutes = Math.floor((initialDistance % (1000 * 60 * 60)) / (1000 * 60));
    const initialSeconds = Math.floor((initialDistance % (1000 * 60)) / 1000);

    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (hoursElement && minutesElement && secondsElement) {
        hoursElement.textContent = formatTime(initialHours);
        minutesElement.textContent = formatTime(initialMinutes);
        secondsElement.textContent = formatTime(initialSeconds);
    } else {
        console.error('Countdown elements not found. Make sure elements with IDs "hours", "minutes", and "seconds" exist in your HTML.');
    }
});