let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

let countDownUntil = new Date("Jul 4, 2023 00:01:00").getTime();

// console.log(currentTime);

let tick = setInterval(function (){
    let currentTime = new Date().getTime();

    let difference = countDownUntil - currentTime;
    // console.log(difference)

    let days = Math.floor(difference /(1000 * 60 * 60 *24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24) ) / (1000 * 60 * 60))
    let minutes = Math.floor((difference % (1000 * 60 *60) )/ (1000 * 60))
    let seconds = Math.floor((difference % (1000 * 60)) / 1000)
    console.log(days, hours, minutes, seconds);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

}, 1000)