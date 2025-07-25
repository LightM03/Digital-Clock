function updateClock() {
    const now = new Date();
    
    // extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // format with leading zeroes
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // create time string
    const currentTime = `${hours}:${minutes}:${seconds}`;

    //Display Time
    document.getElementById('clock').textContent = currentTime;
}

// Update the clock every second
setInterval(updateClock, 1000);

//run it immediately so there is no delay
updateClock();

// select the button and the body
const button = document.getElementById('startButton');
const body = document.body;

// when the button is clicked, toggle dark mode
toggleButton.addEventListener("click", function() {
    body.classList.toggle("dark");

})