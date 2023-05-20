let infobtn =document.querySelector('#info');
let searchbtn =document.querySelector('#search');
let loginbtn =document.querySelector('#login');
let loginform =document.querySelector('.login-form');
let searchform =document.querySelector('.search-form');
let contactform =document.querySelector('.contact-info');
let contactclose =document.querySelector('.close');
let menu =document.querySelector('#menu');
let navbar =document.querySelector('.navbar');

// ======================= menu show ===============
menu.addEventListener('click',()=>{
   navbar.classList.toggle('open');
   loginform.classList.remove('open');
   searchform.classList.remove('open');
});
// ================= contact form open===========================
infobtn.addEventListener('click',()=>{
    contactform.classList.add('open');
    loginform.classList.remove('open');
    searchform.classList.remove('open');
    navbar.classList.remove('open');
   
});

// =========================contact form close =======================
contactclose.addEventListener('click',()=>{
    contactform.classList.remove('open');
   
});

// ========================== search form open=========================
searchbtn.addEventListener('click',()=>{
    searchform.classList.toggle('open');
    loginform.classList.remove('open');
    navbar.classList.remove('open');
});

// ===========================login from open===========================
loginbtn.addEventListener('click',()=>{
    loginform.classList.toggle('open');
    searchform.classList.remove('open');
    navbar.classList.remove('open');
});

// ================================= onscroll============================

window.onscroll=()=>{
    loginform.classList.remove('open');
    searchform.classList.remove('open');
    contactform.classList.remove('open');
    navbar.classList.remove('open');
}



// ==============================================================================================================
// ========================================= Swiper Js ==========================================================
// ==============================================================================================================

const swip = new Swiper('.home', {
  
   
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });

const swipers = new Swiper('.swipper-clients', {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
      
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  
   
  });

var swiper = new Swiper(".swipper-blogs", {
  loop:true,
  spaceBetween: 20,
  navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
        },

  breakpoints: {
    640: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
    
    },
    1024: {
      slidesPerView: 3,
      
    },
  },
});



var brand = new Swiper(".s", {
  loop:true,
  spaceBetween: 20,
  navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
        },

  breakpoints: {
    640: {
      slidesPerView: 2,
     
    },
    768: {
      slidesPerView: 3,
    
    },
    1024: {
      slidesPerView: 5,
      
    },
  },
});