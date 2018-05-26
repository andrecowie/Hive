$(document).ready(function(){
  $("#blog-nav").click(function(){
    console.log("Click");
    $('#blog').removeClass('d-none');
    $('#home').addClass('d-none');
    $('#photos').addClass('d-none');
  });

  $("#home-nav").click(function(){
    console.log("Click");
    $('#blog').addClass('d-none');
    $('#home').removeClass('d-none');
    $('#photos').addClass('d-none');
  });

  $("#photos-nav").click(function(){
    console.log("Click");
    $('#blog').addClass('d-none');
    $('#home').addClass('d-none');
    $('#photos').removeClass('d-none');
  });

});
