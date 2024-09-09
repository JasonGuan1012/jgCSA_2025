---
layout: base
title: Student Home
description: Home Page
hide: true
---

# **My journey starts here.**

<!-- Here's where I use JavaScript to put the image on my HomePage... -->
<div id="image-container"></div>

<script>
    // Create an image element
    const img = document.createElement('img');
    
    // Set the image source to the school logo
    img.src = 'https://delnorte.powayusd.com/pics/school_logo.png';
    
    // You can add other settings, like an alt text or size
    img.alt = 'Del Norte School Logo';
    img.width = 300; // Adjust this if needed

    // Add the image to the div with id "image-container"
    document.getElementById('image-container').appendChild(img);
</script>



### Visit my GitHub Blog

<br>

<style>
/* From Uiverse.io by TISEPSE */ 
    .btn2 {
        position: relative;
        display: inline-block;
        padding: 15px 30px;
        border: 2px solid #fefefe;
        text-transform: uppercase;
        color: #fefefe;
        text-decoration: none;
        font-weight: 600;
        font-size: 20px;
        transition: 0.3s;
    }

    .btn2::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% - -2px);
        background-color: #212121;
        transition: 0.3s ease-out;
        transform: scaleY(1);
    }

    .btn2::after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% - 50px);
        background-color: #212121;
        transition: 0.3s ease-out;
        transform: scaleY(1);
    }

    .btn2:hover::before {
        transform: translateY(-25px);
        height: 0;
    }

    .btn2:hover::after {
        transform: scaleX(0);
        transition-delay: 0.15s;
    }

    .btn2:hover {
        border: 2px solid #fefefe;
    }

    .btn2 span {
        position: relative;
        z-index: 3;
    }

    button {
        text-decoration: none;
        border: none;
        background-color: transparent;
    }
</style>

<button>
  <a href="https://github.com/JasonGuan1012/jgCSA_2025" class="btn2"><span class="spn2">Visit my blog</span></a>
</button>
<button>
  <a href="https://jasonguan1012.github.io/jgCSA_2025/hacks/2024/09/03/RatingsBlog_IPYNB_2_.html" class="btn2"><span class="spn2">Click to Rate</span></a>
</button>



<style>
    .paste-button {
        position: relative;
        display: block;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .button {
        background-color: #88bc4c;
        color: #212121;
        padding: 10px 15px;
        font-size: 15px;
        font-weight: bold;
        border: 2px solid transparent;
        border-radius: 15px;
        cursor: pointer;
    }

    .dropdown-content, .submenu-content {
        display: none;
        font-size: 13px;
        position: absolute;
        z-index: 1;
        min-width: 200px;
        background-color: #212121;
        border: 2px solid #88bc4c;
        border-radius: 0px 15px 15px 15px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }

    .dropdown-content a, .submenu-content a {
        color: #88bc4c;
        padding: 8px 10px;
        text-decoration: none;
        display: block;
        transition: 0.1s;
    }

    .dropdown-content a:hover, .submenu-content a:hover {
        background-color: #88bc4c;
        color: #212121;
    }

    .dropdown-content a:focus, .submenu-content a:focus {
        background-color: #212121;
        color: #88bc4c;
    }

    .dropdown-content #top:hover {
        border-radius: 0px 13px 0px 0px;
    }

    .dropdown-content #bottom:hover {
        border-radius: 0px 0px 13px 13px;
    }

    .paste-button:hover button {
        border-radius: 15px 15px 0px 0px;
    }

    .paste-button:hover .dropdown-content {
        display: block;
    }

    /* Submenu styles */
    .submenu {
        position: relative;
    }

    .submenu-content {
        top: 0;
        left: 100%;
        border-radius: 0 15px 15px 15px;
    }

    .submenu-content a:first-child:hover {
        border-radius: 0px 13px 0px 0px;
    }

    .submenu-content a:last-child:hover {
        border-radius: 0px 0px 13px 13px;
    }

    .submenu:hover .submenu-content {
        display: block;
    }
</style>


<div class="paste-button">
  <button class="button">Menu &nbsp; ▼</button>
  <div class="dropdown-content">
    <a id="top" href="https://jasonguan1012.github.io/jgCSA_2025/hacks/2024/09/01/JavaScript_IPYNB_2_.html">JavaScript Hack</a>
    <div class="submenu">
        <a id="middle" href="https://jasonguan1012.github.io/jgCSA_2025/hacks/2024/09/01/APCSAPlanning_IPYNB_2_.html">Planning Page &nbsp; ▶</a>
        <div class="submenu-content">
            <a href="https://example.com/submenu1">Things that I attempted</a>
            <a href="https://example.com/submenu2">Accomplishment</a>
        </div>
    </div>
    <a id="bottom" href="https://jasonguan1012.github.io/jgCSA_2025/about/">About Pages</a>
  </div>
</div>

<br>
<br>

<html lang="en">
  
<body>
<!-- Let it Snow! Provided by the WPress Doctor-->
<div id="snow"></div>
<style>
	#snow {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1000;
}
</style>
<script>
	document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 35,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "color": {
                    "value": "#000"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});
</script>

</body>
</html>
