$(document).ready(function(){
  $("#blog-nav").click(function(){
    console.log("Click");
    $('#blog').removeClass('d-none');
    $('#home').addClass('d-none');
    $('#photos').addClass('d-none');
    $('#andre').addClass('d-none');
    $('#harry').addClass('d-none');
    $('#aneeka').addClass('d-none');
    $('#britt').addClass('d-none');
    $('#about').addClass('d-none');
  });

  $("#home-nav").click(function(){
    console.log("Click");
    $('#blog').addClass('d-none');
    $('#home').removeClass('d-none');
    $('#photos').addClass('d-none');
    $('#andre').addClass('d-none');
    $('#harry').addClass('d-none');
    $('#aneeka').addClass('d-none');
    $('#britt').addClass('d-none');
    $('#about').addClass('d-none');
  });

  $("#photos-nav").click(function(){
    console.log("Click");
    $('#blog').addClass('d-none');
    $('#home').addClass('d-none');
    $('#andre').addClass('d-none');
    $('#harry').addClass('d-none');
    $('#aneeka').addClass('d-none');
    $('#britt').addClass('d-none');
    $('#photos').removeClass('d-none');
    $('#about').addClass('d-none');
  });
  $("#harry-nav").click(function(){
    console.log("Click");
    $('#blog').addClass('d-none');
    $('#home').addClass('d-none');
    $('#andre').addClass('d-none');
    $('#harry').removeClass('d-none');
    $('#aneeka').addClass('d-none');
    $('#britt').addClass('d-none');
    $('#photos').addClass('d-none');
    $('#about').addClass('d-none');
  });
  $("#britt-nav").click(function(){
    console.log("Clickbritt");
    $('#blog').addClass('d-none');
    $('#home').addClass('d-none');
    $('#andre').addClass('d-none');
    $('#harry').addClass('d-none');
    $('#aneeka').addClass('d-none');
    $('#britt').removeClass('d-none');
    $('#photos').addClass('d-none');
    $('#about').addClass('d-none');
  });
  $("#andre-nav").click(function(){
    console.log("Click");
    $('#blog').addClass('d-none');
    $('#home').addClass('d-none');
    $('#andre').removeClass('d-none');
    $('#harry').addClass('d-none');
    $('#aneeka').addClass('d-none');
    $('#britt').addClass('d-none');
    $('#photos').addClass('d-none');
    $('#about').addClass('d-none');
  });
  $("#aneeka-nav").click(function(){
    console.log("Click");
    $('#blog').addClass('d-none');
    $('#home').addClass('d-none');
    $('#andre').addClass('d-none');
    $('#harry').addClass('d-none');
    $('#aneeka').removeClass('d-none');
    $('#britt').addClass('d-none');
    $('#photos').addClass('d-none');
    $('#about').addClass('d-none');
  });
  $("#about-nav").click(function(){
    console.log("Click");
    $('#blog').addClass('d-none');
    $('#home').addClass('d-none');
    $('#andre').addClass('d-none');
    $('#harry').addClass('d-none');
    $('#about').removeClass('d-none');
    $('#britt').addClass('d-none');
    $('#photos').addClass('d-none');
    $('#aneeka').addClass('d-none');
  });
});
