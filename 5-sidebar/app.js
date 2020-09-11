// By default css will hide the sidebar,
// so the javascript can handle it
// sidebar-toggle
// sidebar
// close button

const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

// next add event listener for the toggle btn
toggleBtn.addEventListener('click', function () {
    // console.log(sidebar.classList);
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
});