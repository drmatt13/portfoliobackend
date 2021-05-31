const pageviews = document.querySelector(".pageviews");
const price = document.querySelector(".price");

// range slider
const slider = document.getElementsByName("price-range")[0];
slider.oninput = e => {
  pageviews.innerHTML = `${(e.target.value * 6.25).toFixed(0)}K PAGEVIEWS`;
  price.innerHTML = `$${e.target.value}`;
}

// toggle button
const toggleBtn = document.querySelector(".toggle-btn");
const circle = document.querySelector(".circle");

toggleBtn.addEventListener("click", () => {
  circle.classList.toggle("yearly");
});