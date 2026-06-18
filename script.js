// Typing Animation

var typed = new Typed("#typing", {
    strings: [
        "Future Software Engineer 🚀",
        "B.Tech CSE Aspirant 💻",
        "Web Developer 🌐",
        "AI Enthusiast 🤖",
        "Tech Explorer ⚡"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});


// Dark / Light Mode Toggle

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeToggle.innerHTML = "☀️";
        localStorage.setItem("theme","light");
    }
    else{
        themeToggle.innerHTML = "🌙";
        localStorage.setItem("theme","dark");
    }

});


// Save Theme

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
    themeToggle.innerHTML = "☀️";
}


// Smooth Reveal Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(
".glass,.card,.project-card"
).forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// Navbar Active Link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") === "#" + current
        ){
            link.classList.add("active");
        }

    });

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });

    });

});


// Floating Photo Effect

const photo = document.querySelector(".hero-image img");

document.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;

    photo.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});


// Scroll Progress Bar

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#00e5ff";
progressBar.style.zIndex = "9999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    let winScroll =
        document.documentElement.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrolled =
        (winScroll / height) * 100;

    progressBar.style.width = scrolled + "%";

});


// Console Welcome Message

console.log(
"%cWelcome to Rushikesh Jadhav Portfolio 🚀",
"color:#00e5ff;font-size:18px;font-weight:bold;"
);