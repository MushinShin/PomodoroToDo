// Assigns onclick event to button elements in html
const startStopp = document.getElementById("startStop");
const resett = document.getElementById("reset");

startStopp.onclick = startStop;
resett.onclick = reset;

//Define variables to hold values
let seconds = 0;
let minutes = 0;

//Define variables to hold setInterval()
let interval = null;

// Define variables to hold stopwatch status
let status = "stopped";

//StopWatch Function(logic)
function StopWatch() {
    seconds++;

    //Logic to determine when to increment next value
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

    }

    //If seconds/minutes are only one digit, add a leading 0
    const getFormattedNumber = number => (number > 10 ? number : `0${number}`);

    //Display updated time values to user
    counterElement.innerHTML = `${getFormattedNumber(minutes)}:${getFormattedNumber(seconds)}`;
}


function startStop() {
    if (status === "stopped") {

        // Start the Stopwatch by calling setInterval() function
        interval = window.setInterval(StopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }

    else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

// Function to Reset StopWatch
function reset() {
    window.clearInterval("interval");
    seconds = 0;
    minutes = 0;
    document.getElementById("counterElement").innerHTML = "00:00";
    document.getElementById("startStop").innerHTML = "start";
}




