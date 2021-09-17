const mainContainer = document.querySelector('.main-container');
const timeframes = document.querySelectorAll('.card-time > div');
const profileCard = mainContainer.innerHTML;
let profileData = null;

fetch('./data.json')
  .then((response) => response.json())
  .then((stats) => {
    profileData = stats;
    updateThings();
  });