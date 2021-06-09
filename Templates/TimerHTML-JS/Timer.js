//Define vars to hold values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold display value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval()
let interval = null;

// Define var to hold stopwatch status
let status = "stopped";

//StopWatch Function(logic)
function StopWatch() {
    seconds++;

    //Logic to determine when to increment next value
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    //If seconds/minutes/hours are only one digit, add a leading 0
    (seconds < 10) ? displaySeconds = "0" + seconds.toString() : displaySeconds = seconds;
    (minutes < 10) ? displayMinutes = "0" + minutes.toString() : displayMinutes = minutes;
    (hours < 10) ? displayHours = "0" + hours.toString() : displayHours = hours;

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
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
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "start";
}
