function updateTime() {
    const currentTime = new Date();
    const timeElement = document.getElementById("time");
    timeElement.textContent = currentTime.toLocaleTimeString();
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial update
updateTime();