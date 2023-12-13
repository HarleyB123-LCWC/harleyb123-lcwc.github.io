function Services(){
    var element = document.querySelector("#services")
    element.scrollIntoView({behavior: "smooth"});
}
function Home(){
    var element = document.querySelector("#home")
    element.scrollIntoView({behavior: "smooth"});
}
function Progression(){
    var element = document.querySelector("#progression")
    element.scrollIntoView({behavior: "smooth"});
}
function AboutMe(){
    var element = document.querySelector("#about")
    element.scrollIntoView({behavior: "smooth"});
}
function Projects(){
    var element = document.querySelector("#projects")
    element.scrollIntoView({behavior: "smooth"});
}

function Cyberpage() {
    location.href="https://harleyb123-lcwc.github.io/cyberpage/index.html"
}

function CheckMaintenence(IsUnder) {
    if (IsUnder) {
        location.href = "Maintenence.html"
    }
}
