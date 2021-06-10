// Assigns onclick event to button elements in html
const starTimerBtn = document.getElementById("startStop");
const resetTimerBtn = document.getElementById("reset");

// Calls the functions when the users clicks the buttons
starTimerBtn.onclick = startStop;
resetTimerBtn.onclick = reset;

//Define variables to hold values
let seconds = 0;
let minutes = 0;

//Define variables to hold setInterval()
let interval = null;

// Define variables to hold stopwatch status
const Status_Types = {
    STOPPED: 0,
    STARTED: 1
}
let status = Status_Types.STOPPED;

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
    if (status === Status_Types.STOPPED) {

        // Start the Stopwatch by calling setInterval() function
        interval = window.setInterval(StopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = 1;
    }

    else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = 0;
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




