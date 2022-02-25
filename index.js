let navlist = document.querySelector(".navList");
let openicon = document.querySelector(".open");
let closeicon = document.querySelector("#cross");

openicon.addEventListener("click", show);

function show() {
  // navlist.style.display = 'flex';
  navlist.style.left = "0";
}

closeicon.addEventListener("click", shut);

function shut() {
  navlist.style.left = "-100%";
}

function openDiv(evt, Name) {
  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName("contentDiv");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("option");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " active";
}
