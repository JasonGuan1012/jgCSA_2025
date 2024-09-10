---
layout: page
title: About
permalink: /about/
---

<!-- Main Container -->
<div class="about-container" style="max-width: 900px; margin: auto; font-family: 'Arial', sans-serif; line-height: 1.6; color: #f0f0f0; padding: 20px; background-color: #1a1a1a;">

  <!-- Header Section -->
  <section class="header" style="text-align: center; margin-bottom: 30px;">
    <h1 style="font-size: 36px; color: #88bc4c;">About Me</h1>
  </section>

<p> The place I lived and my dream place to live.. </p>
<!-- HTML Structure -->
<div class="slideshow-container">
  <div class="mySlides">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg" alt="California Flag" class="slide-img">
    <div class="text">
      <p>USA</p>
      <p>2019 - Present</p>
    </div>
  </div>

  <div class="mySlides">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg" alt="Oregon Flag" class="slide-img">
    <div class="text">
      <p>California</p>
      <p>2019 - Present</p>
    </div>
  </div>

  <div class="mySlides">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" alt="England Flag" class="slide-img">
    <div class="text">
      <p>China</p>
      <p>2007 - 2019</p>
    </div>
  </div>

  <div class="mySlides">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" alt="Hawaii Flag" class="slide-img">
    <div class="text">
      <p>Norway</p>
      <p>Dream</p>
    </div>
  </div>

  <!-- Next and Previous Buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>

<!-- Dots/Indicators -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span>
</div>

<!-- CSS Styles -->
<style>
  .slideshow-container {
    position: relative;
    max-width: 600px; /* Adjusted size */
    margin: auto;
    background-color: #1a1a1a;
    padding: 20px;
    border-radius: 10px;
  }

  .mySlides {
    display: none;
    text-align: center;
    color: #f0f0f0;
  }

  .slide-img {
    width: 300px; /* Fixed width */
    height: auto; /* Maintain aspect ratio */
    vertical-align: middle;
    border-radius: 10px;
  }

  .text {
    padding: 10px;
    font-size: 18px;
    color: #88bc4c;
  }

  /* Next & previous buttons */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* Dots/indicators */
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .active, .dot:hover {
    background-color: #88bc4c;
  }

  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }
</style>

<!-- JavaScript for Slide Functionality -->
<script>
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
</script>

  <!-- About Me Section -->
  <section class="about-me" style="display: flex; align-items: center; margin-bottom: 30px;">
    <div style="flex: 2;">
      <h2 style="font-size: 28px; color: #f0f0f0;">Hey, I'm Jason!</h2>
      <p style="font-size: 18px; margin-top: 10px;">
        My name is Borui Guan, but I go by Jason. I’m currently a Junior at Del Norte High School. I hope and I will fight for getting all A's in trimester 1.
      </p>
    </div>
    <div style="flex: 1; text-align: center;">
      <img src="https://i.ibb.co/2kGXKP7/2024-08-25-173425.png" alt="My picture" width="150" style="border-radius: 50%; box-shadow: 0 4px 8px rgba(0,0,0,0.6);">
    </div>
  </section>

  <!-- Schedule Section -->
  <section class="schedule" style="margin-bottom: 30px;">
    <h3 style="font-size: 24px; color: #88bc4c;">My Current Schedule</h3>
    <ul style="font-size: 18px; margin-top: 10px; list-style-type: none;">
      <li>AP Calculus AB</li>
      <li>AP Environmental Science</li>
      <li>AP Computer Science A</li>
      <li>American Literature</li>
      <li>Offroll</li>
    </ul>
  </section>

  <!-- Academic Goals Section -->
  <section class="goals" style="margin-bottom: 30px;">
    <h3 style="font-size: 24px; color: #88bc4c;">Academic Goals</h3>
    <p style="font-size: 18px;">
      I’m striving to get A’s in all my AP classes to boost my GPA and prepare for college. It's a tough road, but I’m up for the challenge!
    </p>
  </section>

  <!-- Fun Facts Section -->
  <section class="fun-facts" style="margin-bottom: 30px;">
    <h3 style="font-size: 24px; color: #88bc4c;">Fun Facts About Me</h3>
    <ul style="font-size: 18px; margin-top: 10px; list-style-type: none;">
      <li>I can play the flute and have been part of the concert band for 4 years.</li>
      <li>I moved here 4 years ago but don’t have an accent. (sometimes though)</li>
      <li>I have a collection of Funko Pops. Check it out below!</li>
    </ul>
    <div class="slideshow-container">
    <div class="mySlides">
        <img src="https://i.ibb.co/kXzN8nK/image.png" alt="California Flag" class="slide-img">
        <div class="text">
        </div>
    </div>
    <div class="mySlides">
        <img src="https://i.ibb.co/qrJP7c6/image.png" alt="Oregon Flag" class="slide-img">
        <div class="text">
        </div>
    </div>
    <div class="mySlides">
        <img src="https://i.ibb.co/QQKq6jH/image.png" alt="England Flag" class="slide-img">
        <div class="text">
        </div>
    </div>
    <div class="mySlides">
        <img src="https://i.ibb.co/85YWnT9/image.png" alt="Hawaii Flag" class="slide-img">
        <div class="text">
        </div>
    </div>
    <!-- Next and Previous Buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <!-- Dots/Indicators -->
    <div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
    </div>
    <!-- CSS Styles -->
    <style>
    .slideshow-container {
        position: relative;
        max-width: 600px; /* Adjusted size */
        margin: auto;
        background-color: #1a1a1a;
        padding: 20px;
        border-radius: 10px;
    }
    .mySlides {
        display: none;
        text-align: center;
        color: #f0f0f0;
    }
    .slide-img {
        width: 300px; /* Fixed width */
        height: auto; /* Maintain aspect ratio */
        vertical-align: middle;
        border-radius: 10px;
    }
    .text {
        padding: 10px;
        font-size: 18px;
        color: #88bc4c;
    }
    /* Next & previous buttons */
    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        margin-top: -22px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
    }
    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }
    /* Dots/indicators */
    .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
    }
    .active, .dot:hover {
        background-color: #88bc4c;
    }
    .fade {
        animation-name: fade;
        animation-duration: 1.5s;
    }
    @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }
    </style>
    <!-- JavaScript for Slide Functionality -->
    <script>
    let slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
    </script>
  </section>

  <!-- Favorite Quote Section -->
  <section class="quote" style="margin-bottom: 30px; text-align: center;">
    <h3 style="font-size: 24px; color: #88bc4c;">Favorite Quote</h3>
    <blockquote style="font-size: 20px; font-style: italic; margin-top: 20px; color: #cccccc; text-shadow: 0 0 8px rgba(136, 188, 76, 0.8), 0 0 12px rgba(136, 188, 76, 0.6);">
      “Everything will be okay in the end. If it's not okay, it's not the end.” – John Lennon
    </blockquote>
  </section>

</div>

