$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});