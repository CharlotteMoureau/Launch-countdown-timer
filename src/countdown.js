setInterval(function () {

    let today = new Date().getTime();
    let internship = new Date("Fri Jul 23 2021 17:00:00").getTime();
    let count = internship - today;

    if (internship > today) {
        let days = Math.floor(count / (1000 * 60 * 60 * 24));
        let hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((count % (1000 * 60)) / 1000);

        document.getElementById('day').innerHTML = days;
        document.getElementById('hour').innerHTML = hours;
        document.getElementById('min').innerHTML = minutes;
        document.getElementById('sec').innerHTML = seconds;
    }
}, 1000);