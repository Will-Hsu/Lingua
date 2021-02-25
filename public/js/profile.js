function changeLevel(e, level) {
  var projectHTML = "<p id='logout-confirmation' style = 'color:#911906;'> Are you sure you want to change proficiency to " + level + "?</p>";
	$(".replace").html(projectHTML);
  document.getElementById("changeProf1").style.display = 'block';
  document.getElementById("changeProf2").style.display = 'block';

  //Keep track of new proficiency
  localStorage.setItem('proficiency_change', level);

  e.preventDefault();
}

function clickOn(e){
  var projectHTML = "<p id='logout-confirmation' style = 'color:#911906;'> Are you sure you want to logout?</p>";
	$(".replace").html(projectHTML);
  document.getElementById("button-logout").style.display = 'block';
  document.getElementById("button-logout2").style.display = 'block';
  e.preventDefault();
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Changes proficiency
window.onload = (event) => {
  document.getElementById("level").innerHTML = localStorage.getItem('proficiency');
};

function updateProfInStorage() {
  let tempProf = localStorage.getItem('proficiency_change');
  localStorage.setItem('proficiency', tempProf);
}