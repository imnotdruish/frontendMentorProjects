let ratingInput = document.getElementByClassName('rating__number');
let ratingSelection = document.getElementByTagName('span');
let hideRating = document.getElementByClassName('rating__container');
let showSelection = document.getElementByClassName('selection__container');
let ratingBtn1 = document.getElementById('1');
let ratingBtn2 = document.getElementById('2');
let ratingBtn3 = document.getElementById('3');
let ratingBtn4 = document.getElementById('4');
let ratingBtn5 = document.getElementById('5');
let rating = "";
let userRating = document.getElementById("userRating");
let submitBtn = document.getElementById('submit');

ratingBtn1.addEventListener('click', function(){
  userRating = 1;
});
/*
ratingBtn2.addEventListener("click", (event) => {

  let rating = document.getElementById('2').value;
  let userRating = document.getElementById('user__rating');
  userRating.innerText = rating;
})

ratingBtn3.addEventListener("click", (event) => {

  let rating = document.getElementById('3').value;
  let userRating = document.getElementById('user__rating');
  userRating.innerText = rating;
})

ratingBtn4.addEventListener("click", (event) => {

  let rating = document.getElementById('4').value;
  let userRating = document.getElementById('user__rating');
  userRating.innerText = rating;
})

ratingBtn5.addEventListener("click", (event) => {

  let rating = document.getElementById('5').value;
  let userRating = document.getElementById('user__rating');
  userRating.innerText = rating;
})
*/