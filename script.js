let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {      
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

// Modo oscuro / claro 
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () =>{    
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('ligth-mode');
};

// mix it up portafolio section
var mixer = mixitup('.projects-container');