
// Assigns onclick event to button elements in html
const starTimerBtn = document.getElementById("startStop");
const resetTimerBtn = document.getElementById("reset");
const startStopButton = document.getElementById("startStop");
const counterElement = document.getElementById("counterElement");
const pomodoroBtn = document.getElementById("pomodoro");
const breakBtn = document.getElementById("break");
const longBreakBtn = document.getElementById("long-break");

//Define variables to hold values
let seconds = 0;
let minutes = 25;

//StopWatch Function(logic)
const StopWatch = () => {
    seconds--;

    //Logic to determine when to increment next value
    if (seconds <= 0) {
        seconds = 59;
        minutes--;

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
        startStopButton.innerHTML = Button_Labels.Stop;
        status = Status_Types.STARTED;
    }

    else {
        window.clearInterval(interval);
        startStopButton.innerHTML = Button_Labels.Start;
        status = Status_Types.STOPPED;
    }
}

// Function to Reset StopWatch
const reset = () => {
    window.clearInterval("interval");
    seconds = 00;
    minutes = 25;
    counterElement.innerHTML = "25:00";
    startStopButton.innerHTML = Button_Labels.Start;
    document.getElementById("startStop").classList.remove('break--timer');
    document.getElementById("reset").classList.remove('break--timer');
    document.getElementById("pomodoro").classList.remove('break--comand');
    document.getElementById("break").classList.remove('break--comand');
    document.getElementById("long-break").classList.remove('break--comand');
    document.getElementById("Container").classList.add('container');
    document.getElementById("Container").classList.remove('break--container');
}

const breakColor = () => {
    document.getElementById("startStop").classList.add('break--timer');
    document.getElementById("reset").classList.add('break--timer');
    document.getElementById("pomodoro").classList.add('break--comand');
    document.getElementById("break").classList.add('break--comand');
    document.getElementById("long-break").classList.add('break--comand');
    document.getElementById("Container").classList.remove('container');
    document.getElementById("Container").classList.add('break--container');
    minutes = 5;
    counterElement.innerHTML = "05:00";
    startStopButton.innerHTML = Button_Labels.Start;
}

const longColor = () => {
    minutes = 15;
    counterElement.innerHTML = "15:00";
    startStopButton.innerHTML = Button_Labels.Start;
    document.getElementById("startStop").classList.add('break--timer');
    document.getElementById("reset").classList.add('break--timer');
    document.getElementById("pomodoro").classList.add('break--comand');
    document.getElementById("break").classList.add('break--comand');
    document.getElementById("long-break").classList.add('break--comand');
    document.getElementById("Container").classList.remove('container');
    document.getElementById("Container").classList.add('break--container');
}


// Calls the functions when the users clicks the buttons
starTimerBtn.onclick = startStop;
resetTimerBtn.onclick = reset;
breakBtn.onclick = breakColor;
longBreakBtn.onclick = longColor;
pomodoroBtn.onclick = reset;









