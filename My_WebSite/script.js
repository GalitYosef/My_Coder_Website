const header = document.querySelector('header');
window.addEventListener('scroll',function(){
    header.classList.toggle('sticky',window.scrollY>100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

var typed = new Typed(".text", {
    strings:["Front End Developer",
            "Graphic Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// scroll

const sr = ScrollReveal ({
    distance:'40px',
    duration: 2050,
    delay:150,
    reset:true
})
sr.reveal('.slide , .home-text h1 , .home-text h3 , .home-text p , .home-text .button',{delay:200,origin:'right'});
sr.reveal('.home-text .button',{delay:200,origin:'left'});
sr.reveal('.about-img, .about-text h2, .about-text p, .about-text h4 , .btn',{origin:'bottom'});
sr.reveal('.main-text h2, .main-text p, .btn',{delay:200,origin:'bottom'});
sr.reveal('.main-text h2, .portfolio-content .row,.btn,.btn_graphic',{origin:'bottom'});
sr.reveal('.contact-text h2, .contact-form ,.list, .contact-icons ,.contact-text h4 , .contact-text p',{origin:'right'});

// send email js
var btn = document.getElementById('btn');
btn.addEventListener('click',function (e){
    e.preventDefault();
   Email.send({
    Host : "smtp.elasticemail.com",
    Username : "galityop1@gmail.com",
    Password : "GALIT0123456",
    To : 'galityop1@gmail.com',
    From : document.getElementById('Email').value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => {alert(message);
    document.getElementById('Name').innerHTML="";
    document.getElementById('Email').innerHTML="";
    document.getElementById('Number').innerHTML="";
    document.getElementById('Message').innerHTML="";
}
); 
})

// read more button
function myFunction(elementId) {
    var dots = document.getElementById("dots" + elementId);
    var moreText = document.getElementById("more" + elementId);
    var btnText = document.getElementById("myBtn" + elementId);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      
    }
  }
