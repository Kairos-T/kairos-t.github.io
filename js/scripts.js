
$(document).ready(function(){
  $('#certificate-gallery1').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});

$(document).ready(function(){
  $('#certificate-gallery2').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});

$(document).ready(function(){
  $('#certificate-gallery3').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});

$(document).ready(function(){
  $('#certificate-gallery4').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});

$(document).ready(function(){
  $('#certificate-gallery5').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});


const elements = document.querySelectorAll('.fade-in');

// Create an intersection observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the "fade-in" class to the intersecting element
      entry.target.classList.add('fade-in');

      // Stop observing the element
      observer.unobserve(entry.target);
    }
  });
});

// Observe each element
elements.forEach(element => {
  observer.observe(element);
});
