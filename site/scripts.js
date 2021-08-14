//referts to the switch element in the body
const switchElement = document.querySelector('.switch');

//this method when you click on the switch it will run
//this function that toogles the body into dark mode
switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
});