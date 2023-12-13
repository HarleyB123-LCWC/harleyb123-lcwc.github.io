let launchDate = new Date("Dec 7, 2023 14:00:00").getTime();

let timer = setInterval(tick, 1000);

function tick () {
  let now = new Date().getTime();
  let t = launchDate - now;


  if (t > 0) {
    var Maintenence = true;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10) { days = "0" + days; }
    
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }

    let time = `${days} Days : ${hours} Hours : ${mins} Mins : ${secs} Secs`;

    document.querySelector('.countdown').innerText = time;
  }
  if (t<=0){
    var Maintenence = false;
    document.querySelector('.countdown').innerText = "Maintenence Done | Redirecting";
    location.href = "index.html";
  }


}

