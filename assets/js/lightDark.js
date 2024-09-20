const body = document.querySelector('body')
const darkLightBtn = document.getElementById('dark-light-btn');
const inputContainer = document.getElementById('input-container');
const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const navBar = document.getElementById('navbar');
const textNavBar = document.getElementById('text-navbar');
const lightLogo = document.getElementById('light-logo')
const darkLogo = document.getElementById('dark-logo')
const output = document.getElementById('output');

darkLightBtn.addEventListener('click', () => {
  if (body.classList.contains('text-bg-light')){
    body.classList.replace('text-bg-light', 'text-bg-dark');
    inputContainer.classList.replace('text-bg-dark', 'text-bg-light');
    inputNumber.classList.replace('border-light', 'border-dark');
    convertBtn.classList.replace('border-light', 'border-dark');
    navBar.classList.replace('bg-dark', 'bg-light');
    textNavBar.classList.replace('text-light', 'text-dark');
    lightLogo.classList.add('visually-hidden');
    darkLogo.classList.remove('visually-hidden');
    output.classList.replace('border-dark', 'border-light');
    output.classList.replace('text-bg-dark', 'text-bg-light');
    darkLightBtn.classList.replace('btn-light', 'btn-dark');
    darkLightBtn.textContent = 'Light Mode';
  } else if (body.classList.contains('text-bg-dark')) {
    body.classList.replace('text-bg-dark', 'text-bg-light');
    inputContainer.classList.replace('text-bg-light', 'text-bg-dark');
    inputNumber.classList.replace('border-dark', 'border-light');
    convertBtn.classList.replace('border-dark', 'border-light');
    navBar.classList.replace('bg-light', 'bg-dark');
    textNavBar.classList.replace('text-dark', 'text-light');
    lightLogo.classList.remove('visually-hidden');
    darkLogo.classList.add('visually-hidden');
    output.classList.replace('border-light', 'border-dark');
    output.classList.replace('text-bg-light', 'text-bg-dark');
    darkLightBtn.classList.replace('btn-dark', 'btn-light');
    darkLightBtn.textContent = 'Dark Mode';
  }
})