const popupScreen = document.querySelector("#popup-screen");
const closeBtn = document.querySelector(".close-btn");

window.onscroll = function() {
    var element = document.getElementById("navbar");

    if(scrollY < 230){
        element.style = "background: transparent;";
    }
    else{
        element.style = "background: #171544;";
    }
};

window.addEventListener("load", function() {
    var preloader = document.getElementById("preloader");
    preloader.classList.add("hide");
});

function newPost(){
    popupScreen.classList.add("active");
}

closeBtn.addEventListener("click", () => {
    popupScreen.classList.remove("active");
});


// document.addEventListener("DOMContentLoaded", function() {
//     var preloader = document.getElementById("preloader");
//     preloader.classList.add("hide");
// });

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
  