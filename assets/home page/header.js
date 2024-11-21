/////////////////////////////////////////////////////////////////////// navbar /////////////////////////////////////////////////////////////////////

const hamburger = document.querySelector('.hamburger');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');
const body = document.body;

// Open and close side menu
hamburger.addEventListener('click', () => {
  sideMenu.classList.add('open');
  body.classList.add('green-bg');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  body.classList.remove('green-bg');
});

// Close the menu when clicking outside
document.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && !hamburger.contains(e.target)) {
    sideMenu.classList.remove('open');
    body.classList.remove('green-bg');
  }
});

// Toggle dropdown in side menu
document.querySelectorAll('.side-menu .dropdown > a').forEach((dropdownLink) => {
  dropdownLink.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = dropdownLink.parentElement;
    parent.classList.toggle('open');
  });
});


///////////////////////////////////////////////////////////// search///////////////////////////////////////////////////////////////////////////////

const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let boxes = document.querySelectorAll('h3');
    let moviesContainer = document.querySelector('.movies-container');
    let visibleCount = 0;

    boxes.forEach(box => {
        if (box.textContent.toUpperCase().indexOf(filter) > -1) {
            box.parentElement.parentElement.style.display = ""; // Show the item
            visibleCount++;
        } else {
            box.parentElement.parentElement.style.display = "none"; // Hide the item
        }
    });

    // if (visibleCount > 0) {
    //     moviesContainer.style.justifyContent = "left"; // Align to the left if there are visible items
    //     moviesContainer.style.marginLeft = "40.7%"; 
    //     // moviesContainer.style.marginRight = "20%"; // Adjust this value as needed
    // } else {
    //     moviesContainer.style.justifyContent = "center"; // Center if no items are visible
    //     moviesContainer.style.marginLeft = "0"; // Reset margin
    //     moviesContainer.style.marginRight = "0";
    // }
};

