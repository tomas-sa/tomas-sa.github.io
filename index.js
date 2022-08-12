const texto = [{
    'español':{
        'nav':{
            1:'sobre mi',
            2: 'habilidades',
            3: 'proyectos',
            4: 'contacto'
        },
        'subHeader':'desarrollador web front-end buscando mi primer trabajo IT',
        'sobreMi':{
            1:'sobre mi',
            2: 'soy una persona proactiva jajaja'
        },
        'habilidades':{
            1:'habilidades',
            2: 'tecnologias',
            3: 'idiomas',
            4: 'educación',
            5: 'inglés C1',
            6: 'italiano básico',
            7: 'tecnicatura en informática'
        },
        'proyectos':{
            proyectosTitulo: 'proyectos',
            proyecto: 'tienda de indumentaria'
        },
        'contacto':{
            titulo: 'contacto',
            nombre: 'nombre',
            asunto: 'asunto',
            email: 'E-mail',
            mensaje: 'mensaje'
        }
    },
    'english':{
        'nav':{
            1:'about me',
            2: 'skills',
            3: 'proyects',
            4: 'contact'
        },
        'subHeader':'front-end web developer looking for my first job in the IT world',
        'sobreMi':{
            1:'About me',
            2: "I'm the best person you'll ever encounter"
        },
        'habilidades':{
            1:'skills',
            2: 'technologies',
            3: 'languages',
            4: 'education',
            5: 'English C1',
            6: 'Basic Italian',
            7: 'Software engenering'
        },
        'proyectos':{
            proyectosTitulo: 'proyect',
            proyecto: 'shopping website'
        },
        'contacto':{
            titulo: 'contact',
            nombre: 'name',
            asunto: 'subject',
            email: 'E-mail',
            mensaje: 'message'
        }
    }
}]



// ************* SCROLL BEHAVIOR ************************

const mediaQuery = window.matchMedia('(min-width: 950px)')

const nav = document.querySelector('.nav')

window.addEventListener('scroll', () =>{
    if(mediaQuery.matches){
        if(window.pageYOffset > 150){
        nav.style.backgroundColor = 'var(--colorTres)'
    } else{
        nav.style.backgroundColor = 'transparent'
    }
    }else{
        nav.style.backgroundColor = 'var(--colorTres)'
    }
})

// ************* FLECHA ************************
const hero = document.querySelector('.hero')
const flecha = document.querySelector('.flecha')
const flechaDentro = document.querySelector('.fa-arrow-up')

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > (hero.getBoundingClientRect().height -300)){
        flecha.style.backgroundColor = 'var(--colorTres)'
        flecha.style.opacity = '1'
        flechaDentro.style.color = 'var(--mainColor)'
        flecha.style.cursor = 'pointer'
        flechaDentro.style.cursor = 'pointer'
    } else{
        flecha.style.backgroundColor = 'transparent'
        flecha.style.opacity = '0'
        flechaDentro.style.color = 'var(--mainColor)'
        flecha.style.cursor = 'initial'
        flechaDentro.style.cursor = 'initial'
    }
})

// ************* DARK ************************

const body = document.body
const toggler = document.getElementById('toggler')
const estrella = document.getElementById('star')

toggler.addEventListener('click', ()=>{
    if(body.classList.contains('dark')){
        estrella.src = 'imagenes/Star 1.png'
        console.log(estrella.src);
        toggler.classList.remove('fa-sun')
        toggler.classList.add('fa-moon')
    } else{
        estrella.src = 'imagenes/Star 2.png'
         toggler.classList.remove('fa-moon')
        toggler.classList.add('fa-sun')
    }
    body.classList.toggle('dark')
    estrella.classList.toggle('movement')
    heroBack.classList.toggle('special')
})

// ************* TABS HABILIDADES ************************

const skills = document.querySelectorAll('.skill')
const show = document.querySelector('.show')
skills.forEach(skill =>{
    skill.firstElementChild.addEventListener('click', e =>{
        skills.forEach(item =>{
            if(item.firstElementChild.id !== skill.firstElementChild.id){
                item.classList.remove('show')
            }
        })
        e.currentTarget.parentElement.classList.toggle('show')
    })
})

// ******************** OTROS ************************

const heroBack =  document.querySelector('.hero')
const magia =  document.querySelector('.fa-envelope')
magia.addEventListener('click', ()=>{
    
})

const perfil = document.querySelector('.contenedor-sobremi')
perfil.addEventListener('click', foto =>{
    foto.style.translate = '500px'
})

// ******************** MOBILE NAV ************************

const listaNav = document.querySelector('.lista-nav')
const menuBarra = document.querySelector('.fa-bars')
menuBarra.addEventListener('click', ()=>{
    listaNav.classList.toggle('bajador')
})

// ******************** ENVIAR EMAIL ************************

function enviarEmail(){
    Email.send({
    Host : "smtp.gmail.com",
    Username : "tomysaravia00@gmail.com",
    Password : "ahzjgfmtwmnhkbrq",
    To : 'tomysaravia00@gmail.com',
    From : document.getElementById('e-mail').value,
    Subject : document.getElementById('asunto').value,
    Body : "Nombre: " + document.getElementById('nombre').value
    + '<br> mensaje: ' + document.getElementById('mensaje').value
}).then(
  message => alert('Mensaje enviado')
);
}