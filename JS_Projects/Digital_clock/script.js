function showTime() {
    var date = new Date();

    var hrs = date.getHours();
    var mins = date.getMinutes();
    var s = date.getSeconds();

    var session = "AM";

    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        session = "PM";
    }

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    s = (s < 10) ? "0" + s : s;

    var time = hrs + ":" + mins + ":" + s + " " + session;

    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();