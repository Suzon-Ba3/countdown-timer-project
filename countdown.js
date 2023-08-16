//Select all needed elements
let days = document.getElementById(`days`);
let hours = document.getElementById(`hours`);
let minutes = document.getElementById(`minutes`);
let seconds = document.getElementById(`seconds`);

function countdown() {
    //Time function
    const eventTime = new Date(`01 SEP 2023 10:00:00`);
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
}
countdown();
setInterval(countdown, 1000);