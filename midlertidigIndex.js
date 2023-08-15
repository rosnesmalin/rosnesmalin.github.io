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




/* animasjon opp */
function reveal() {
  var reveals = document.querySelectorAll(".animasjonOpp");

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




// cookie policy

// skift bilde på tomat

// fjern knapp


window.addEventListener('scroll', function() {
  var buttonElement = document.getElementById('fixed-knapp');
  var targetElement = document.getElementById('åpningstiderOgAdresse');

  // Hent posisjonen til mål-elementet og visningsvinduet
  var targetPosition = targetElement.getBoundingClientRect().top;
  var viewHeight = window.innerHeight;

  // Sjekk om mål-elementet er synlig i visningsvinduet
  if (targetPosition < viewHeight) {
    // Fjern knappen hvis mål-elementet er synlig
    buttonElement.style.display = 'none';
  } else {
    // Vis knappen hvis mål-elementet ikke er synlig
    buttonElement.style.display = 'block';
  }
});


