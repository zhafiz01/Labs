const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
const lettersLink = document.getElementById('lettersLink');
const numbersLink = document.getElementById('numbersLink');
const lettersContent = document.getElementById('lettersContent');
const numbersContent = document.getElementById('numbersContent');

const toggleMenu = () => {
  menu.classList.toggle('hidden');
};


const showLetters = (event) => {
  event.preventDefault();
  lettersContent.classList.remove('hidden');
  numbersContent.classList.add('hidden');
  menu.classList.add('hidden');
};

const showNumbers = (event) => {
  event.preventDefault(); 
  numbersContent.classList.remove('hidden');
  lettersContent.classList.add('hidden');
  menu.classList.add('hidden'); 
};


menuButton.addEventListener('click', toggleMenu);
lettersLink.addEventListener('click', showLetters);
numbersLink.addEventListener('click', showNumbers);
