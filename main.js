// ScrollReveal({ reset: true });

// ScrollReveal().reveal(".show-once", {
//   reset: false
// });

// ScrollReveal().reveal(".title", {
//   duration: 3000,
//   origin: "top",
//   distance: "400px",
//   easing: "cubic-bezier(0.5, 0, 0, 1)",
//   rotate: {
//     x: 20,
//     z: -10
//   }
// });

// ScrollReveal().reveal(".fade-in", {
//   duration: 5000,
//   move: 0
// });

// ScrollReveal().reveal(".scaleUp", {
//   duration: 4000,
//   scale: 0.85
// });

// ScrollReveal().reveal(".flip", {
//   delay: 500,
//   duration: 2000,
//   rotate: {
//     x: 20,
//     z: 20
//   }
// });

// ScrollReveal().reveal(".slide-right", {
//   duration: 3000,
//   origin: "left",
//   distance: "300px",
//   easing: "ease-in-out"
// });

// ScrollReveal().reveal(".slide-up", {
//   duration: 2000,
//   origin: "bottom",
//   distance: "100px",
//   easing: "cubic-bezier(.37,.01,.74,1)",
//   opacity: 0.3,
//   scale: 0.5
// });


const navBar = document.querySelector(".nav-bar");
const hambarger = document.querySelector(".hambarger");
window.addEventListener("scroll",()=>{
    const sHeight = scrollY;

    if(sHeight>2){
        navBar.classList.add("active");
        hambarger.classList.toggle("active");
    }else{
        navBar.classList.remove("active");
        
    }
})

const menuOpen = document.querySelector(".nav-bar nav ul");

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", ()=>{
    menuOpen.classList.toggle("open");
    hambarger.classList.toggle("active");
})
