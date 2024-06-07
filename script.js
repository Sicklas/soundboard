let numberOfSoundButtons = document.querySelectorAll(".button-74").length;

for (var i = 0; i<numberOfSoundButtons; i++) {
    document.querySelectorAll(".button-74") [i].addEventListener("click", function () {
        
        this.style.color ="white";
        
        let buttonInnerHtml = this.innerHTML;

        switch (buttonInnerHtml) {
            case "Q":
                var maik = new Audio("Sounds/Maik-Zeit-zu-flippen.mp3");
                maik.play();
                break;
            case "W":
                var dun = new Audio("Sounds/dun-dun-dun.mp3");
                dun.play();
                break;
            case "E":
                var aww = new Audio("Sounds/awwww.mp3");
                aww.play();
                break;
            case "R":
                var kathi = new Audio("Sounds/Kathi.mp3");
                kathi.play();
            break;
            case "T":
                var eugen = new Audio("Sounds/Eugen.mp3");
                eugen.play();
            break;
            case "Z":
                var jakob = new Audio("Sounds/JakobDabbed.mp3");
                jakob.play();
            break;
            case "U":
                var mert = new Audio("Sounds/Mert.mp3");
                mert.play();
            break;
            default: console.log(buttonInnerHtml);
        }


    })
}


