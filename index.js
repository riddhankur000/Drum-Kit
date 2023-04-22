for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    var drm=document.querySelectorAll(".drum")[i];
    drm.addEventListener("click",function(){
        sound(this.innerHTML);
        buttonanimation(this.innerHTML);
    })
};

function buttonanimation(letter){
    var button=document.querySelector("."+letter);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    },150);
}

document.addEventListener("keydown",function(event){
    sound(event.key);
    buttonanimation(event.key);
})
    // var styles=window.getComputedStyle(drm);
    // var drum_type=(styles.backgroundImage).slice(12,-6);
    // // console.log(drum_type);
    // alert(drum_type);

    // drm.addEventListener("click",function() {
    //     // this.style.backgroundImage="url('')";
    //     this.style.color="white";
    // });
// }

function sound(letter){
    switch(letter){
        case 'w':
            var music=new Audio("sounds/crash.mp3");
            music.play();
            break;
        case 'a':
            var music=new Audio("sounds/kick.mp3");
            music.play();
            break;
        case 's':
            var music=new Audio("sounds/snare.mp3");
            music.play();
            break;
        case 'd':
            var music=new Audio("sounds/tom-1.mp3");
            music.play();
            break;
        case 'j':
            var music=new Audio("sounds/tom-2.mp3");
            music.play();
            break;
        case 'k':
            var music=new Audio("sounds/tom-3.mp3");
            music.play();
            break;
        case 'l':
            var music=new Audio("sounds/tom-4.mp3");
            music.play();
            break;

    }
}

// function changecolor(ele){
//     ele.style.color="white";
// }
