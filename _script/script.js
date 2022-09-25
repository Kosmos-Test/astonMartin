window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if (scrolled > 10){
    document.getElementById("videoCinematic").muted = true;
  } else{
    document.getElementById("videoCinematic").muted = false
  }
}