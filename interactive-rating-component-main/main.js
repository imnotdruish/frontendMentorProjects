let ratingInput = document.getElementsByClassName('rating__number');
let ratingSelection = document.getElementsByTagName('span');
let hideRating = document.getElementsByClassName('rating__container');
let showSelection = document.getElementsByClassName('selection__container');
let submitBtn = document.getElementById('submit');

let ratingBtn1 = (event) => {

  let rating = document.getElementById('1').value;
  let userRating = document.getElementById('user__rating');
  userRating.innerText = rating;
}

let ratingBtn2= (event) => {

  let rating = document.getElementById('2').value;
  let userRating = document.getElementById('user__rating');
  userRating.innerText = rating;
}

let ratingBtn3 = (event) => {

  let rating = document.getElementById('3').value;
  let userRating = document.getElementById('user__rating');
  userRating.innerText = rating;
}

let ratingBtn4 = (event) => {

  let rating = document.getElementById('4').value;
  let userRating = document.getElementById('user__rating');
  userRating.innerText = rating;
}

let ratingBtn5 = (event) => {

  let rating = document.getElementById('5').value;
  let userRating = document.getElementById('user__rating');
  userRating.innerText = rating;
}