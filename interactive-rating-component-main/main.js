let ratingBtn = document.querySelectorAll('.rating__number');
let submitBtn = document.querySelector('.submit');
let userRating = document.querySelector("#userRating");
let ratingCard = document.querySelector('.rating__container');
let selectionCard = document.querySelector('.selection__container');
let rating;

ratingBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    ratingBtn.forEach((btn) => btn.classList.remove('selected'));
    e.target.classList.add('selected');
    rating = e.target.textContent;
  });
});

submitBtn.addEventListener('click', () => {
  userRating.textContent = rating;
  ratingCard.style.display = 'none';
  selectionCard.style.display = 'flex';
});
