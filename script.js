document.addEventListener("scroll",()=>{
const secciones = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

let seccionActual = "";

secciones.forEach((seccion) => {
const seccionTop = seccion.offsetTop -80;
const seccionHeight = seccion.offsetHeight;

if(window.scrollY >= seccionTop && window.scrollY < seccionTop + seccionHeight){
    seccionActual = seccion.getAttribute("id");
}
});

navLinks.forEach((link) =>{
    link.classList.remove("active");
    if(link.getAttribute("href") === `#${seccionActual}`){
        link.classList.add("active");
    }
});
});

// Ajustar el desplazamiento para que no quede cubierto por la navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, 
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fullView');
    const secciones = document.querySelectorAll('.desplazamiento');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.5 }
    );
  
    sections.forEach((section) => observer.observe(section));
    secciones.forEach((section) => observer.observe(section));
  });
  