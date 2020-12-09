const menuButton = document.querySelector('.menu-btn');
let menuOpen = false;
menuButton.addEventListener('click', () => {
  if(!menuOpen) {
    menuButton.classList.add('open');
    menuOpen = true;
  } else {
    menuButton.classList.remove('open');
    menuOpen = false;
  }
});



// grab a reference to all the elements that will control the show/hide of the nav
const navIcons = document.querySelectorAll('.menu-btn.js-nav-icon')

// loop through each of the nav icon triggers and add an event listener
navIcons.forEach(function (icon) {
	icon.addEventListener('click', toggleNav);
});

// create the event handler function to toggle the active state of the site nav
function toggleNav(event) {
	const siteNav = document.querySelector('.user-nav-open')
	siteNav.classList.toggle('is-active');
}




// Initialize and add the map
function initMap() {
  // The location of Uluru
  const borehamwood = { lat:  51.647750, lng: -0.261360 };
  // The map, centered at borehamwood
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: borehamwood,
  });
  // The marker, positioned at borehamwood
  const marker = new google.maps.Marker({
    position: borehamwood,
    map: map,
  });
}
