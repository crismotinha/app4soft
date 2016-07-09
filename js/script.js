// Menu hamburguer

function slidetoggle() {
      var slider = document.getElementById("content-menu");
      // slider.style.height = (window.innerHeight -(window.innerHeight * 0,3)) + "px";
      // slider.style.top = (window.innerHeight -(window.innerHeight * 0,3)) + "px";
      document.getElementById("shadow").className += " is-active";
      if(slider.style.left == "0px") {
        slider.style.left = "-300px";
        
      }
      else {
        slider.style.left = "0px";
      }
    }
function slideclose() {
      var slider = document.getElementById("content-menu");
      document.getElementById("shadow").className = "shadow";
      slider.style.left = "-300px";
    }