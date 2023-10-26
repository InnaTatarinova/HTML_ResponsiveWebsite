
// Scroll to the section
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}


// Turn on the slide when the window was resized
let resizedId;
let slideIndex = 0;
let timer;


function resizedEnded(){
  let element = document.getElementsByClassName("slider");
  if (window.innerWidth <= 750) {
    for (let el of element) {
      el.classList.add("fade", "slide");
      el.style.display = "none";
    }
    console.log(console.timeStamp() + ": call showSlides()")
    showSlides();
  } else {
    console.log(console.timeStamp() + ": call clearTimeout()");
    clearTimeout(timer);
    for (let el of element) {
      el.classList.remove("fade", "slide");
      el.style.display = "block";
    }
  }
}

window.addEventListener("resize", function () {
  this.clearTimeout(resizedId);
  resizedId = this.setTimeout(resizedEnded,500);
  
});



function showSlides() {
  let slides = document.getElementsByClassName("slide");
  if (slides.length > 0) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    console.log(console.timeStamp() + ": setTimeout()");
    timer = setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
}
