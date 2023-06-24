document.addEventListener("DOMContentLoaded", () => {
  let hamMenuIcon = document.getElementById("ham-menu");
  let navBar = document.querySelector("nav");
  let navLinks = navBar.querySelector("ul");

  hamMenuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamMenuIcon.classList.remove("fa-times");
  });
});


// dersom jeg vil ha fixed navbar //
/*
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "15vmin";
    document.getElementById("logo").style.height = "12vmin";
    document.getElementById("navlinks").style.marginTop = "45px";;
  } else {
    document.getElementById("navbar").style.height = "22vmin";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("navlinks").style.fontSize = "25px";
  }
}
*/

// pop up melding :

// når siden lastes inn trigges denne funkjsonen (readyfunksjon)
  $(document).ready(function(){

    // viser meldingen etter det har gått 1 sek
    setTimeout(showModal,1500);
    // når knappen trykkes på skjules meldingen
    $("#closeBtn").click(function(){
      $("#infoMelding").hide()
      $("#overlay").hide();
    })

    function showModal(){
      // henter verdi fra "localStorage", som er en måte å lagre små mengder informasjon på 
      //datamaskinen til brukeren når de besøker en nettside. 
      // Denne informasjonen blir lagret lokalt og kan hentes frem senere, selv etter at 
      // brukeren har lukket nettleservinduet og åpnet det igjen.

      var is_modal_show = sessionStorage.getItem('alreadyShow');
      if(is_modal_show != 'alredy shown'){
        $("#overlay").show();
        $("#infoMelding").show()
        sessionStorage.setItem('alreadyShow','alredy shown');
      }else{
        console.log(is_modal_show);
      }
    }
  })


/* animasjon opp */
function reveal() {
  var reveals = document.querySelectorAll(".animasjonOpp");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}



/* animasjon fra venstre */
function reveal2() {
  var reveals = document.querySelectorAll(".animasjonFraVenstre");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 30;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}



/* animasjon fra høyre */
function reveal3() {
  var reveals = document.querySelectorAll(".animasjonFraHøyre");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 30;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal3);
window.addEventListener("scroll", reveal2);