// menu button
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
  if (nav.style.display == '') {
    nav.style.display = 'block';
  } else {
    nav.style.display = '';
  }
});
