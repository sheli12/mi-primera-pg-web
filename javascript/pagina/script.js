
function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  }
  let boton= document.getElementyById("miBoton");
  boton.addEventListener("click",function(){
      alert("haz hecho click en el boton");
  });










