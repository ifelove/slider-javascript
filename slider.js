let images = [
  { img: "animal/animal.jpg" },

  { img: "animal/animal2.jpg" },

  { img: "animal/animal3.jpg" },

  { img: "animal/animal4.jpg" },
];

let currentImage = 0;
var slideImage = document.querySelector(".slide-img");
let imagePosition = document.querySelector(".image-position");
let slide = document.querySelector(".slide");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let autoBtn = document.querySelector(".auto");
let indicators = document.querySelectorAll(".indicators span");

window.addEventListener("DOMContentLoaded", DisplayImage(currentImage));

/*
for(i=0;i<indicators.length;i++){
indicators[i].style.background="white"
}
indicators[currentImage].style.background="red"
*/

function DisplayImage(picture) {
  let item = images[picture];
  slideImage.src = item.img;
  //imagePosition.innerText = item.position;

  indicators.forEach((indicator) => {
    indicator.style.background = "none";
  });
  indicators[picture].style.background = "red";
}

nextBtn.addEventListener("click", () => {
  //stop()
  currentImage = currentImage + 1;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }

  DisplayImage(currentImage);
});

prevBtn.addEventListener("click", () => {
  //stop()
  currentImage = currentImage - 1;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  DisplayImage(currentImage);
});

function timer() {
  currentImage = currentImage + 1;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  DisplayImage(currentImage);
}

// function stop(){
//  clearInterval(intervalid)
// }

function start() {
  intervalid = setInterval(timer, 3000);
}

autoBtn.addEventListener("click", start);

function onclickImage(e) {
  DisplayImage((currentImage = e));
}
