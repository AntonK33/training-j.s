//const atTheOldToad = {
  //potions: [
  //  { name: "Speed potion", price: 460 },
 //   { name: "Dragon breath", price: 780 },
 //   { name: "Stone skin", price: 520 },
 // ],
  
  // Change code below this line
  
//};
//let y =  {...potions};
//console.log(y);

const modal = document.querySelector('#modal');
const BtnOpen = document.querySelector('#button-open');
const BtnClose = document.querySelector('#button-close');
const overlayClose = document.querySelector('#overlay');
const loginForm = document.querySelector('#login-form');
const title = document.querySelector('h2');
const error = document.querySelector('h4');


  BtnOpen.addEventListener('click', () => {
    modal.classList.remove('hiden');
    overlayClose.classList.remove('hiden');
  });
  BtnClose.addEventListener('click', () => {
    modal.classList.add('hiden');
    overlayClose.classList.add('hiden')
  });
overlayClose.addEventListener('click', () => { 
  modal.classList.add('hiden');
  overlayClose.classList.add('hiden')
})
  
const correctLogin = 'antonkulackov@gmail.com';
const correctPassword = '1234';

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const login = data.get('login');
  const password = data.get('password');
  if (login === correctLogin && password === correctPassword) {
    modal.classList.add('hiden');
    overlayClose.classList.add('hiden');
    title.classList.remove('hiden');
  } else {
    error.classList.remove('hiden');
}

}); 