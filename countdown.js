//Select all needed elements
let days = document.getElementById(`days`);
let hours = document.getElementById(`hours`);
let minutes = document.getElementById(`minutes`);
let seconds = document.getElementById(`seconds`);

function countdown() {
    //Time function
    const eventTime = new Date(`23 AUG 2023 10:00:00`);
    const currentTime = new Date();
    const totalTime = eventTime - currentTime;

    //Time convert
    let totalSeconds = totalTime / 1000;
    totalSeconds = parseInt(totalSeconds);
    let totalMinutes = Math.floor(totalSeconds / 60);
    let totalHours = Math.floor(totalMinutes / 60);

    //Remain event time
    let daysRemain = Math.floor(totalHours / 24);
    let hoursRemain = totalHours % 24;
    let minutesRemain = totalMinutes % 60;
    let secondsRemain = totalSeconds % 60;
    
    //Event time call in HTML
    days.innerHTML = daysRemain;
    hours.innerHTML = hoursRemain;
    minutes.innerHTML = minutesRemain;
    seconds.innerHTML = secondsRemain;

    if (daysRemain <= 0 && hoursRemain <= 0 && minutesRemain <= 0 && secondsRemain <= 0) {
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
    }
}
countdown();
setInterval(countdown, 1000);