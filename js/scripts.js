$(document).ready(function(){
    $('.certificate-gallery').slick({
      dots: true, // Show the navigation dots
      arrows: true, // Show the navigation arrows
      infinite: true, // Enable infinite scrolling
      speed: 300, // Animation speed in milliseconds
      slidesToShow: 1, // Number of images to show at once
      adaptiveHeight: true // Set the height of the container to the height of the current slide
    });
  });
  