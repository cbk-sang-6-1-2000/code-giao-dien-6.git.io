$(document).ready(function(){
  $('.question li p').hide();
  
  $('.question li').click(function() {
      if ($(this).hasClass("active")) {
          $(this).removeClass("active").find("p").slideUp();
          $(this).find("i").removeClass("icofont-minus-circle").addClass("icofont-plus-circle");
      } else {
          $(".question li.active").removeClass("active").find("p").slideUp();
          $(this).addClass("active").find("p").slideDown();
          $(".question li i").removeClass("icofont-minus-circle").addClass("icofont-plus-circle");
          $(this).find("i").removeClass("icofont-plus-circle").addClass("icofont-minus-circle");
      }
      return false;
  });
  });