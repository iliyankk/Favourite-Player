// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling behavior
  });
}

// Show or hide the button based on scroll position
window.onscroll = function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block"; // Display button if scrolled down
  } else {
    scrollToTopBtn.style.display = "none"; // Hide button if at top
  }
};

function menu() {
  var div = document.getElementById("menu");
  var nav = document.getElementById("nav-menu");
  var menu = document.getElementById("btn-open");
  var closeMenu = document.getElementById("btn-close");

  if (div) {
    div.classList.toggle("hidden"); // Toggle the 'hidden' class

    if (div.classList.contains("hidden")) {
      // If the div is hidden, collapse it
      div.style.maxHeight = "0";
      menu.style.display = "block"; // Show open menu button
      closeMenu.style.display = "none"; // Hide close menu button
    } else {
      // If the div is shown, set the max-height based on screen width
      if (window.matchMedia("(max-width: 650px)").matches) {
        div.style.maxHeight = "140px"; // Max height for smaller screens
        nav.style.height = "140px"; // Height adjustment for smaller screens
      } else {
        div.style.maxHeight = "50px"; // Default max-height for larger screens
        nav.style.height = "50px"; // Default height for larger screens
      }
      menu.style.display = "none"; // Hide open menu button
      closeMenu.style.display = "block"; // Show close menu button
    }
  }
}

let slideIndex = 1;
showSlides(slideIndex); // Show the first image when the website loads

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n); // Increment slide index
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n); // Set slide index to specific image
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} // Reset index to first slide
  if (n < 1) {slideIndex = slides.length} // Set index to last slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove 'active' class from dots
  }
  slides[slideIndex-1].style.display = "block"; // Show current slide
  dots[slideIndex-1].className += " active"; // Add 'active' class to current dot
}
