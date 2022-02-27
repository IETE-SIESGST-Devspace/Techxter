let navContent = document.querySelector(".navContent");
let openIcon = document.querySelector(".open");
let closeIcon = document.querySelector("#cross");

openIcon.addEventListener("click", show);

function show() {
  // navContent.style.display = 'flex';
  navContent.style.left = "0";
}

closeIcon.addEventListener("click", shut);

function shut() {
  navContent.style.left = "-100%";
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

// AOS
AOS.init({
  offset: 20, // offset (in px) from the original trigger point
  duration: 100, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
});