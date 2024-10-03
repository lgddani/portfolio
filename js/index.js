
// ------------------ MENÚ HAMBURGUESA ------------------ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}


// ------------------ MODAL ------------------ 
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('modalImg');
var projectsCards = document.querySelectorAll('.img-certificates');

projectsCards.forEach(function(card) {
  card.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.querySelector('img').src; 
  });
});

var closeModal = document.querySelector('.close');
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


// ------------------ ENVIAR CORREO ------------------ 

function redirectToEmail() {
  var email = 'rdanienriquez01@gmail.com';
  var mailtoLink = 'mailto:' + email;
  window.location.href = mailtoLink;
}

