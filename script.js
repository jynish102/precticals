const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.toggle');
const searchBtn = document.querySelector('.search-box');
const modeSwitch = document.querySelector('.toggle-switch');
const modeText = document.querySelector('.mode-text');

       toggle.addEventListener("click", () =>{
              sidebar.classList.toggle("close");
       });

       modeSwitch.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent bubbling
    body.classList.toggle('dark');

    modeText.innerText = body.classList.contains("dark")
        ? "Light Mode"
        : "Dark Mode";
});



