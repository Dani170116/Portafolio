const inicio = document.getElementById('start');
const aboutMe = document.getElementById('aboutMe');
const proyectos = document.getElementById('projects');
const contacto = document.getElementById('contact');

window.addEventListener('scroll',function(){
    let section = window.scrollY;
    if(section < 500){
        inicio.classList.add('active');
        aboutMe.classList.remove('active');
        proyectos.classList.remove('active');
        contacto.classList.remove('active');
    }else if(section < 1400){
        aboutMe.classList.add('active');
        inicio.classList.remove('active');
        proyectos.classList.remove('active');
        contacto.classList.remove('active');
    }else if(section < 2100){
        proyectos.classList.add('active');
        inicio.classList.remove('active');
        aboutMe.classList.remove('active');
        contacto.classList.remove('active');
    }else{
        contacto.classList.add('active');
        inicio.classList.remove('active');
        aboutMe.classList.remove('active');
        proyectos.classList.remove('active');
    }
});