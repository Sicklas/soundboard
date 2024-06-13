//Year for Copyrighthttp://127.0.0.1:3000/index.html
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
            maikBack();
            break;
        case "w":
            var dun = new Audio("Sounds/woJakob.mp3");
            dun.play();
            break;
        case "e":
            var michael = new Audio("Sounds/michaelZittert.mp3");
            michael.play();
            break;
        case "r":
            var kathi = new Audio("Sounds/Kathi.mp3");
            kathi.play();
            pink();
        break;
        case "t":
            var eugen = new Audio("Sounds/Eugen.mp3");
            eugen.play();
            russia();
        break;
        case "z":
            var jakob = new Audio("Sounds/JakobDabbed.mp3");
            jakob.play();
            dabBack();
        break;
        case "u":
            var mert = new Audio("Sounds/Mert.mp3");
            mert.play();
            mertBack();
        break;
        case "i":
            var niklas = new Audio("Sounds/niklasDabbed.mp3");
            niklas.play();
            dabBack();
        break;
        case "o":
            var maikD = new Audio("Sounds/maikDabbed.mp3");
            maikD.play();
            dabBack();
        break;
        case "p":
            var moinEugen = new Audio("Sounds/moinEugen.mp3");
            moinEugen.play();
        break;
        case "ü":
            var danko = new Audio("Sounds/danko.mp3");
            danko.play();
        break;
        case "a":
            var russe = new Audio("Sounds/russeEugen.mp3");
            russe.play();
            russia();
        break;
        case "s":
            var like = new Audio("Sounds/like.mp3");
            like.play();
        break;
        default: console.log(buttonInnerHtml);
    }
}



//Darkmode - getting triggerd by switch button
function darkMode() {
    //header, footer and main
    document.getElementsByClassName('header')[0].classList.toggle("headerdarkMode");
    document.getElementsByClassName('footer')[0].classList.toggle ("footerdarkMode");
    document.getElementsByClassName('main')[0].classList.toggle("maindarkMode");
    document.getElementById('search').classList.toggle("inputdarkMode");
    //Getting all the Tiles
    for (var i = 0; i<document.querySelectorAll(".tile").length; i++) {
    document.getElementsByClassName('tile')[i].classList.toggle("tiledarkMode");}
    // Getting all the Links
    for (var e = 0; e<document.querySelectorAll(".link").length; e++) {
        document.getElementsByClassName('link')[e].classList.toggle("linkdarkMode");}
    // Getting all the Buttons
    for (var f = 0; f<document.querySelectorAll(".button-74").length; f++) {
        document.getElementsByClassName('button-74')[f].classList.toggle("buttondarkMode");}
}

//durchsucht die h3 titel
function search() {
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
    let x = document.querySelectorAll('.tile');
    x.forEach((item) => {
          if(!item.querySelector('h3').innerHTML.toLocaleLowerCase().includes(input)) {
            item.classList.add('hidden');
          } else {
            item.classList.remove('hidden');
          }
    })
}


//custom backgrounds
function russia(){
    document.getElementsByClassName('main')[0].classList.add("russianBackground");

    setTimeout(function(){
        document.getElementsByClassName('main')[0].classList.remove("russianBackground");
    }, 3000)
}

function pink(){
    document.getElementsByClassName('main')[0].classList.remove("maindarkMode");
    document.getElementsByClassName('main')[0].classList.add("pinkMode");

    setTimeout(function(){
        document.getElementsByClassName('main')[0].classList.remove("pinkMode");
        if (document.getElementsByClassName('header')[0].classList.contains('headerdarkMode')){
            document.getElementsByClassName('main')[0].classList.add("maindarkMode");
        }
    }, 2200)
}

function mertBack(){
    document.getElementsByClassName('main')[0].classList.add("mertBackground");

    setTimeout(function(){
        document.getElementsByClassName('main')[0].classList.remove("mertBackground");
    }, 6000)
}

function maikBack(){
    document.getElementsByClassName('main')[0].classList.add("maikBackground");

    setTimeout(function(){
        document.getElementsByClassName('main')[0].classList.remove("maikBackground");
    }, 3500)
}

function dabBack(){
    document.getElementsByClassName('main')[0].classList.add("dabMode");

    setTimeout(function(){
        document.getElementsByClassName('main')[0].classList.remove("dabMode");
    }, 2000)
}