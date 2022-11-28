

// SPLIDE

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
        perPage: 2,

        rewind:true,
        focus  : 'center',
    } ).mount();
  } );




//   ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// NAVIGATION
var menu = document.getElementByClassName("menu")
document.g
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}