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
var dd = v.getDate();
var mm = v.getMonth();
var yyyy = v.getFullYear();

if (dd < 10) {
    date.innerText = `0${dd}: ${mm}: ${yyyy}`;
}

if (mm < 10) {
    date.innerText = `${dd}: 0${mm}: ${yyyy}`;
}