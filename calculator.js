// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Resume loaded');
});

//  Typing Text Animation  //

var typed = new Typed(".typing", {
    strings: [
      "Fullstack Developer",
      "UI/UX Designer",
      "Software Developer",
      "Python Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });