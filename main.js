let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");


menu.onclick = () => {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle("move");
};
window.onscroll = () => {  //this close the menu when you click//
    navbar.classList.remove('open-menu');
    menu.classList.remove("move");
}

//reviews swiper// 

var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //email js//
function validate(){
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else{
            sendmail (name.value, email.value, msg.value);
            success();
        }
    })
}
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_0e4l7ov","template_wlrnetk",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}


function emptyerror(){
    swal({
        title: "Oh No...",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}
function success(){
    swal({
        title: "Email sent successfully",
        text: "FWe try to reply in 24 hours!",
        icon: "success",
      });
}

//header background changue on scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
})

//scroll top//
let scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY > 400);
})





console.log("✅ main.js se está ejecutando correctamente");

document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.querySelector('.skills-content');

  if (!skillsSection) {
    console.warn("⚠️ No se encontró la sección skills-content");
    return;
  }

  console.log("✅ Se detectó .skills-content");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("👀 skills-content está visible, animación activada");
        skillsSection.classList.add('animate');
        observer.unobserve(skillsSection);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(skillsSection);
});



//Heere! to werite my beauty name :D//
const phrases = [
  "Lillianeth Rivas ",
  "a Aspiring Full Stack ",
  "a Backend Enthusiast ",
  "a Tech Explorer ",
  "a Problem Solver ",
  "a Dreamer... "
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const animatedText = document.getElementById("animated-text");

function typeAnimation() {
  const current = phrases[index];
  const updatedText = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  animatedText.textContent = updatedText;

  let speed = isDeleting ? 100 : 200;

  if (!isDeleting && charIndex === current.length) {
    speed = 1500; // wait before deleting
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % phrases.length;
    speed = 500; // pause before typing next
  }

  setTimeout(typeAnimation, speed);
}

typeAnimation();



function openModal(id) {
  document.getElementById(id).style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
  document.body.style.overflow = "auto";
}
