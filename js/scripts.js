"use strict";

(function ($) {
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });
})(jQuery);

$(document).ready(function () {
  $("#certificate-gallery1").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

$(document).ready(function () {
  $("#certificate-gallery2").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

$(document).ready(function () {
  $("#certificate-gallery3").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

$(document).ready(function () {
  $("#certificate-gallery4").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

$(document).ready(function () {
  $("#certificate-gallery5").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

$(document).ready(function () {
  $("#certificate-gallery6").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

$(document).ready(function () {
  $("#certificate-gallery7").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.add("fade-out");
    }
  });
});

elements.forEach((element) => {
  observer.observe(element);
});

// Scramble Text -- Source: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjtuozLvvWAAxUgTmwGHWaaBncQFnoECBMQAQ&url=https%3A%2F%2Fcodepen.io%2Fsoulwire%2Fpen%2FmErPAK&usg=AOvVaw2teEAk5FDlMfCEyHH2fzzC&opi=89978449

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const el = document.querySelector("#scramble");
const fx = new TextScramble(el);
const phrases = ["Kairos' Portfolio"];

let isHovered = false; // Track hover state
let counter = 0;

el.addEventListener("mouseenter", () => {
  isHovered = true;
  next();
});

el.addEventListener("mouseleave", () => {
  isHovered = false;
  fx.setText(phrases[0]); // Reset text when leaving
});

const next = () => {
  if (!isHovered) return; // Exit if not hovered
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1000);
  });
  counter = (counter + 1) % phrases.length;
};
