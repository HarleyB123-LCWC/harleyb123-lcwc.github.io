let launchDate = new Date("Dec 7, 2023 14:00:00").getTime();

let timer = setInterval(CheckTicker, 1000);

function CheckTicker(){
    let now = new Date().getTime();
    let t = launchDate - now;

    if (t > 0) {
        CheckMaintenence(true)
    } 
    else {
        CheckMaintenence(false)
    }
}

