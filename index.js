// Select all button that have class .drum using vanilla JS
// for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// }

// Select all button that have class .drum using jQuery
$(".drum").click(handleClick);

function drumKey(input){
    switch(input){
        case "w" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l" :
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default: 
    }
}
function handleClick(){

    var drumSounds = this.innerHTML;
    buttonAnimation(this.innerHTML);
    drumKey(drumSounds);
    console.log(Event);
}

// Take input from keyboard using event listener using vanilla JS
// document.addEventListener("keydown", function(Event){
//     console.log(Event);
//     drumKey(Event.key);
//     buttonAnimation(Event.key);
    
// })


// Take input from keyboard using event listener using vanilla JS
function keyboardInput(Event){
    console.log(Event);
    drumKey(Event.key);
    buttonAnimation(Event.key);
}
$(document).keypress(keyboardInput);

function buttonAnimation(Event){
    var activeButton = document.querySelector("."+Event);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")},100);
}
