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