const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


function openGit() {
    window.open("https://github.com/MarianM00/Site-Drx");
  }
function openYou() {
    window.open("https://www.youtube.com/watch?v=Iy9hps2IiYg");
  }

function openGit2() {
    window.open("https://github.com/MarianM00/Application-C-Sharp");
  }
function openYou2() {
    window.open("https://www.youtube.com/watch?v=msb11K1bGxk");
  }  

function openGit3() {
    window.open("https://github.com/MarianM00/SmartHome");
  }
function openYou3() {
    window.open("https://www.youtube.com/watch?v=A5CtTh3PT_0");
  }  
  
function openGit4() {
    window.open("https://github.com/MarianM00/TransactionHistoryMVC");
  }
function openYou4() {
    window.open("https://www.youtube.com/watch?v=bUL-jjnBz9Y");
  } 
function openGit0() {
    window.open("https://github.com/MarianM00");
}   
function openIns() {
  window.open("https://www.instagram.com/marianm.99/");
}   
function openFbk() {
  window.open("https://www.facebook.com/puiu.marin.1/");
}   

function openlin() {
  window.open("https://www.linkedin.com/in/marin-marian-677859197/");
}   

  
/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORKSPACE*/

sr.reveal('.grid-item',{}); 
sr.reveal('.card-img',{delay: 600});

sr.reveal('.work__container',{interval: 200}); 



