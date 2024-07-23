var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".side-bar");
var container= document.querySelector(".container");
var like = document.querySelector(".like-btn");

menuIcon.onclick = function()
{
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    like-btn.classList.toggle("blue-like-btn");
   
}