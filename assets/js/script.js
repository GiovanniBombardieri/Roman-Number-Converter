const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn');

darkBtn.addEventListener('click', () => {
  if (body.classList.contains('bg-light')){
    body.classList.replace('bg-light', 'bg-dark');
    body.classList.replace('text-dark', 'text-light');
    darkBtn.classList.replace('btn-dark', 'btn-light');
    darkBtn.textContent = 'Light Mode'
  } else if (body.classList.contains('bg-dark')) {
    body.classList.replace('bg-dark', 'bg-light');
    body.classList.replace('text-light', 'text-dark');
    darkBtn.classList.replace('btn-light', 'btn-dark');
    darkBtn.textContent = 'Dark Mode'
  }
})