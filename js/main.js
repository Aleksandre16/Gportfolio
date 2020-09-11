const searchBox = document.querySelector(".search-box")
const navBtnContainer = document.querySelector(".nav-btn-container")
const searchbtn = document.querySelector("search-btn")


searchbtn.addEventListener("click", () => {
searchBox.classList.add("active");
navBtnContainer.classList.add("active");
});