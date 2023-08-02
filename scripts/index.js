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
function EmailSubmit(){
    location.href = "#home";
    console.log("Email Submitting")
}

function Login(){
    console.log("Feature Not Avaliable Yet | [WIP]")
    var error = "", field = "";
    error += "Feature Not Avaliable Yet";
    alert(error);
}
function Discord(){
    window.open("https://discord.gg/r24QvX4Xzh", "_blank");
}
function CheckMaintenence(IsUnder) {
    if (IsUnder) {
        location.href = "Maintenence.html"
    }
}