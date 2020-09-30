var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
/*  close button*/
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function () {

  $(".main-menu-list a").click(function () {
    var id = $(this);
    $(".active").removeClass("active");
    localStorage.setItem("selectedolditem", $(id).text());
  });
  var selectedolditem = localStorage.getItem('selectedolditem');

  if (selectedolditem !== null) {
    $("a:contains('" + selectedolditem + "')").addClass("active");
  }

  $(".overlay-content a").click(function () {
    var id = $(this);
    $(".active").removeClass("active");
    localStorage.setItem("selectedolditem", $(id).text());
  });
  var selectedolditem = localStorage.getItem('selectedolditem');

  if (selectedolditem !== null) {
    $("a:contains('" + selectedolditem + "')").addClass("active");
  }

});


// About page 
