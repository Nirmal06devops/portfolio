// ===============================
// TYPING ANIMATION
// ===============================

var typed = new Typed(".typing-text", {

    strings: [
        "Frontend Developer",
        "Web Designer",
        "Java Developer",
        "UI Designer"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true

});


// ===============================
// ACTIVE NAVBAR ON SCROLL
// ===============================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;

        let offset = sec.offsetTop - 150;

        let height = sec.offsetHeight;

        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });

            document.querySelector(
                "header nav a[href*=" + id + "]"
            ).classList.add("active");
        }
    });

};


// ===============================
// STICKY HEADER
// ===============================

window.addEventListener("scroll", () => {

    let header = document.querySelector(".header");

    header.classList.toggle(
        "sticky",
        window.scrollY > 100
    );

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

ScrollReveal({

    distance: '80px',

    duration: 2000,

    delay: 200,

    reset: false

});


// TOP REVEAL

ScrollReveal().reveal(

    '.home-content, .about-text, .sub-title',

    {
        origin: 'top'
    }

);


// BOTTOM REVEAL

ScrollReveal().reveal(

    '.home-img, .about-img, .skills-container',

    {
        origin: 'bottom'
    }

);


// LEFT REVEAL

ScrollReveal().reveal(

    '.home-content h1, .about-text h4',

    {
        origin: 'left'
    }

);


// RIGHT REVEAL

ScrollReveal().reveal(

    '.home-content p, .about-text p',

    {
        origin: 'right'
    }

);


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);


// BUTTON STYLE

topBtn.style.position = "fixed";

topBtn.style.bottom = "30px";

topBtn.style.right = "30px";

topBtn.style.width = "50px";

topBtn.style.height = "50px";

topBtn.style.borderRadius = "50%";

topBtn.style.border = "none";

topBtn.style.background = "#0ef";

topBtn.style.color = "#081b29";

topBtn.style.fontSize = "25px";

topBtn.style.cursor = "pointer";

topBtn.style.display = "none";

topBtn.style.zIndex = "999";

topBtn.style.boxShadow =
    "0 0 20px #0ef";


// SHOW BUTTON

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});


// BUTTON CLICK

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// SKILL CARD HOVER EFFECT
// ===============================

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) scale(1)";

    });

});


// ===============================
// SOCIAL ICON CLICK EFFECT
// ===============================

const socialIcons =
    document.querySelectorAll(".home-nr a");

socialIcons.forEach(icon => {

    icon.addEventListener("click", () => {

        icon.style.transform = "scale(0.9)";

        setTimeout(() => {

            icon.style.transform = "scale(1)";

        }, 150);

    });

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons =
    document.querySelectorAll(".btn-box");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});


// ===============================
// CURSOR GLOW EFFECT
// ===============================

const cursorGlow = document.createElement("div");

document.body.appendChild(cursorGlow);

cursorGlow.style.position = "fixed";

cursorGlow.style.width = "20px";

cursorGlow.style.height = "20px";

cursorGlow.style.borderRadius = "50%";

cursorGlow.style.background = "#0ef";

cursorGlow.style.pointerEvents = "none";

cursorGlow.style.transform = "translate(-50%, -50%)";

cursorGlow.style.boxShadow =
    "0 0 20px #0ef, 0 0 40px #0ef";

cursorGlow.style.zIndex = "9999";

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";

});


// ===============================
// PAGE LOADER
// ===============================

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "%cPortfolio Loaded Successfully 🚀",
    "color:#0ef; font-size:20px; font-weight:bold;"
);
// ================= TYPING EFFECT =================

var typed = new Typed(".typing-text", {

    strings: [

        "AI Developer",

        "Frontend Developer",

        "RAG Chatbot Developer",

        "UI Designer"

    ],

    typeSpeed: 100,

    backSpeed: 60,

    backDelay: 1000,

    loop: true

});


// ================= SCROLL REVEAL =================

ScrollReveal({

    distance:'80px',

    duration:2000,

    delay:200,

    reset:false

});

ScrollReveal().reveal(

    '.home-content, .title',

    {origin:'top'}

);

ScrollReveal().reveal(

    '.home-img, .project-card',

    {origin:'bottom'}

);

ScrollReveal().reveal(

    '.about-img',

    {origin:'left'}

);

ScrollReveal().reveal(

    '.about-content, .contact-container',

    {origin:'right'}

);


// ================= CONTACT FORM =================

const form =
document.querySelector(".contact-form");

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    alert("Message Sent Successfully 🚀");

    form.reset();

});


// ================= BACK TO TOP =================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";

topBtn.style.bottom = "30px";

topBtn.style.right = "30px";

topBtn.style.width = "50px";

topBtn.style.height = "50px";

topBtn.style.borderRadius = "50%";

topBtn.style.border = "none";

topBtn.style.background = "cyan";

topBtn.style.color = "black";

topBtn.style.fontSize = "25px";

topBtn.style.cursor = "pointer";

topBtn.style.display = "none";

topBtn.style.zIndex = "999";

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});