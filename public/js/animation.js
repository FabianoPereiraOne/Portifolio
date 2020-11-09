(function($){
   "use strict";

   //Inicializar contador
   var $doc = $('html,body');
   $('.scroll-page').click(function(){
       $doc.animate({
           scrollTop:$($.attr(this,'href')).offset().top
       },500);
       return false;
   })
})(jQuery);

alegre = () =>{
   const logo = document.querySelector("#logo") 
   logo.classList.toggle("wavy")
}

setInterval(alegre, 10000)
