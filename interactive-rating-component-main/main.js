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
