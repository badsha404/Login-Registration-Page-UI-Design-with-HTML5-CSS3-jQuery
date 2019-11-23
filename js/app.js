$(document).ready(function(){
  $(".login-registration-switcher").click(function(){
    if($(this).siblings(".x-registration-side").hasClass("show")){
      $(this).siblings(".x-registration-side").removeClass("show");
      $(this).siblings(".x-login-side").addClass("show");
    }
    else if($(this).siblings(".x-login-side").hasClass("show")){
      $(this).siblings(".x-registration-side").addClass("show");
      $(this).siblings(".x-login-side").removeClass("show");
    }
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $(this).text("Registration");
    }
    else {
      $(this).addClass("active");
      $(this).text("Login");
    }
  })
})
