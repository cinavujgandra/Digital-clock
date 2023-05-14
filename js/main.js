const myClockDay = document.querySelector('.myClockDay')
const myClockTime = document.querySelector('.myClockTime')
const myClockDate = document.querySelector('.myClockDate')
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


setInterval(function () {
    let dt = new Date();
    let day = dt.getDay();
    let month = dt.getMonth();
    let year = dt.getUTCFullYear();
    let datte = dt.getUTCDate();
    let hrs = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

    min = startTime(min);
    sec = startTime(sec);

    // Show time and date.
    myClockDay.innerHTML = dayNames[day]
    myClockTime.innerHTML = `${hrs}:${min}:${sec}`
    myClockDate.innerHTML = `${datte} ${monthNames[month]} ${year}`;


});

let startTime = (val) => {
    if (val < 10) {
        val = '0' + val;
    }
    return val;
}