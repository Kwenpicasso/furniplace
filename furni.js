document.addEventListener("DOMContentLoaded", function(){
    let hb = document.querySelector('.block .header');
    if(hb){
        //let header = document.querySelector('.header'); 
        let hamburger = document.querySelector('.burger');
        // console.log( )
        hamburger.addEventListener('click', function(){
             hb.classList.toggle('active');
        })
    }
});