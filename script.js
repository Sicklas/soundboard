//Year for Copyright
document.getElementById("year").innerHTML = new Date().getFullYear();


//Detecting Button press
let numberOfSoundButtons = document.querySelectorAll(".button-74").length;
for (var i = 0; i<numberOfSoundButtons; i++) {
    document.querySelectorAll(".button-74") [i].addEventListener("click", function () {
        
        this.style.color ="white"; //pressed Buttons getting white
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
    })
}

//Detecting Key Press
document.addEventListener("keydown",function(event) {
    makeSound(event.key);
});


function makeSound (key){
    switch (key) {
        case "q":
            var maik = new Audio("Sounds/Maik-Zeit-zu-flippen.mp3");
            maik.play();
            break;
        case "w":
            var dun = new Audio("Sounds/dun-dun-dun.mp3");
            dun.play();
            break;
        case "e":
            var aww = new Audio("Sounds/awwww.mp3");
            aww.play();
            break;
        case "r":
            var kathi = new Audio("Sounds/Kathi.mp3");
            kathi.play();
        break;
        case "t":
            var eugen = new Audio("Sounds/Eugen.mp3");
            eugen.play();
        break;
        case "z":
            var jakob = new Audio("Sounds/JakobDabbed.mp3");
            jakob.play();
        break;
        case "u":
            var mert = new Audio("Sounds/Mert.mp3");
            mert.play();
        break;
        case "i":
            var niklas = new Audio("Sounds/niklasDabbed.mp3");
            niklas.play();
        break;
        case "o":
            var maikD = new Audio("Sounds/maikDabbed.mp3");
            maikD.play();
        break;
        case "p":
            var moinEugen = new Audio("Sounds/moinEugen.mp3");
            moinEugen.play();
        break;
        case "ü":
            var danko = new Audio("Sounds/danko.mp3");
            danko.play();
        break;
        default: console.log(buttonInnerHtml);
    }
}



//Darkmode
function darkMode() {
    //header, footer and main
    document.getElementsByClassName('header')[0].classList.toggle("headerdarkMode");
    document.getElementsByClassName('footer')[0].classList.toggle ("footerdarkMode");
    document.getElementsByClassName('main')[0].classList.toggle("maindarkMode");
    //Getting all the Tiles
    for (var i = 0; i<document.querySelectorAll(".tile").length; i++) {
    document.getElementsByClassName('tile')[i].classList.toggle("tiledarkMode");
    // Getting all the Links
    for (var e = 0; e<document.querySelectorAll(".link").length; e++) {
        document.getElementsByClassName('link')[e].classList.toggle("linkdarkMode");
}

}}