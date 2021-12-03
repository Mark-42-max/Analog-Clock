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
    mm = v.getMonth().toString();
}

var yyyy = v.getFullYear().toString();

date.innerText = dd + ": " + mm + ": " + yyyy;



// -------------------------------------------------------------------------------------------------------

var sound = document.getElementById("audio");

function buttonDisplay() {

    document.getElementById("stopAlarm").style.display = `block`;
    document.getElementById("pauseAlarm").style.display = `block`;
}

function buttonHide() {

    document.getElementById("stopAlarm").style.display = `none`;
    document.getElementById("pauseAlarm").style.display = `none`;
}

function ring() {

    var alarm = document.querySelector('input[type="datetime-local"]').value;
    const a = new Date(alarm);
    if (isNaN(a)) {

        alert("Invalid input");
    }

    now = new Date();

    timeToRing = a - now;

    while (1) {

        if (timeToRing < 0) {

            // alert("Time already passed...");
            setTimeout(initAlarm(), timeToRing);
            buttonDisplay();
            break;
        }
        now = new Date();

        timeToRing = a - now;
    }
}

function initAlarm() {

    sound.loop = true;
    sound.play();
}

function stopRing() {

    window.location.reload();
}

function pauseRing() {

    sound.pause();
    setTimeout(function() {
        sound.loop = true;
        sound.play();
    }, 300000);
}