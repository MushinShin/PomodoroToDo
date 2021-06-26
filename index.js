
// Assigns onclick event to button elements in html
const starTimerBtn = document.getElementById("startStop");
const resetTimerBtn = document.getElementById("reset");
const startStopButton = document.getElementById("startStop");
const counterElement = document.getElementById("counterElement");
//Define variables to hold values
let seconds = 0;
let minutes = 0;

//StopWatch Function(logic)
const StopWatch = () => {
    seconds++;

    //Logic to determine when to increment next value
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

    }

    //If seconds/minutes are only one digit, add a leading 0
    let getFormattedNumber = (number) => (number > 10 ? number : `0${number}`);

    //Display updated time values to user
    counterElement.innerText = `${getFormattedNumber(minutes)}:${getFormattedNumber(seconds)}`;
}

//Define variables to hold setInterval()
let interval = null;

let status = Status_Types.STOPPED;

const startStop = () => {
    if (status === Status_Types.STOPPED) {

        // Start the Stopwatch by calling setInterval() function
        interval = window.setInterval(StopWatch, 1000);
        startStopButton.innerHTML = Button_Labels.Start;
        status = Status_Types.STARTED;
    }

    else {
        window.clearInterval(interval);
        startStopButton.innerHTML = Button_Labels.Stop;
        status = Status_Types.STOPPED;
    }
}

// Function to Reset StopWatch
const reset = () => {
    window.clearInterval("interval");
    seconds = 0;
    minutes = 0;
    counterElement.innerHTML = "00:00";
    startStopButton.innerHTML = Button_Labels.Start;
}

// Calls the functions when the users clicks the buttons
starTimerBtn.onclick = startStop;
resetTimerBtn.onclick = reset;








