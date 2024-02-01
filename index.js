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
  offset: 250, // offset (in px) from the original trigger point
  duration: 1100, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
});

// Hackathon Date CountDown

// Date we're counting down to
var countDownDate = new Date("March 22, 2024 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
