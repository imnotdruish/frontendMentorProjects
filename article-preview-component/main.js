let share = document.querySelector('.fa-share');
let profile = document.querySelector('.profile');
let social = document.querySelector('.social__links');
let popupSocial = document.querySelector('.popup__social__links');
let card = document.querySelector('.profile__card');
const width = window.innerWidth;

console.log(width);

share.addEventListener('click', () => {
  if (width < 999) {

    if (social.style.display == 'none') {   

        social.style.display = 'flex';
        card.style.display = 'none';
        profile.style.marginTop = '30px';
        profile.classList.add('dark');
        share.classList.add('dark');
        share.classList.remove('light');
        share.style.backgroundColor = "var(--clr-neutral)";
        share.style.color = "var(--clr-neutral-light)";

    } else {

        social.style.display = 'none';
        card.style.display = 'flex';
        profile.style.marginTop = 'unset';
        profile.classList.remove('dark');
        share.classList.remove('dark');
        share.classList.add('light');
        share.style.backgroundColor = "var(--clr-neutral-light)";
        share.style.color = "var(--clr-neutral)";

    }

  } else {
    
    if (social.style.display == 'none') {
      
        popupSocial.style.display = 'flex';
        card.style.display = 'none';
        profile.style.marginTop = '30px';
        profile.classList.add('dark');
        share.classList.add('dark');
        share.classList.remove('light');
        share.style.backgroundColor = "var(--clr-neutral)";
        share.style.color = "var(--clr-neutral-light)";

    } else {

        popupSocial.style.display = 'none';
        card.style.display = 'flex';
        profile.style.marginTop = 'unset';
        profile.classList.remove('dark');
        share.classList.remove('dark');
        share.classList.add('light');
        share.style.backgroundColor = "var(--clr-neutral-light)";
        share.style.color = "var(--clr-neutral)";

    }

  }

});