setInterval(function() {

    var d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();


    let hdeg = (30 * h) + (m / 2) + (s / 120);
    let mdeg = (6 * m) + (s / 10);
    let sdeg = (6 * s);

    document.getElementById("hour").style.transform = `rotate(${hdeg}deg)`;
    document.getElementById("minute").style.transform = `rotate(${mdeg}deg)`;
    document.getElementById("second").style.transform = `rotate(${sdeg}deg)`;
}, 1000);


// -------------------------------------------------------------------------------------------------------


var date = document.getElementById("date");
var v = new Date();

if (v.getDate() < 10) {

    var dd = "0" + v.getDate().toString();
} else {
    dd = v.getDate().toString();
}

if (v.getMonth() < 10) {

    var mm = "0" + v.getMonth().toString();
} else {
    mm = v.getMonth().toString;
}

var yyyy = v.getFullYear().toString();

date.innerText = dd + ": " + mm + ": " + yyyy;



// -------------------------------------------------------------------------------------------------------

var sound = new Audio();
sound.src("../audio/mixkit-game-notification-wave-alarm-987.wav");

function ring() {

    var alarm = document.getElementById("alarmTime");
}