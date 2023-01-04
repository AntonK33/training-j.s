//const scrollEventAmount = document.querySelector('.scroll-amount');
//window.addEventListener('scroll', e => {
 //   const value = scrollEventAmount.innerHTML;
 //   value = Number(value) += 1;
 //   scrollEventAmount.innerHTML = value
   
//})
const output = document.querySelector(".scroll-amount");
const resizeEventAmount = document.querySelector('.resize-amount');
let scrollEventCounter = 0;
let resizeEventCounter = 0;

const scrollEventHandler = e => {
 scrollEventCounter += 1;
  output.textContent = scrollEventCounter;
}
const resizeEventHandler = e => {
 resizeEventCounter += 1;
  resizeEventAmount.textContent = resizeEventCounter;
}

//const trotledScrollHandler = _.throttle(scrollEventHandler, 300);
window.addEventListener("scroll", _.throttle(scrollEventHandler, 300));
window.addEventListener("resize", _.throttle(resizeEventHandler, 300));

const debouncedUserNameHandler = _.debounce( e => {
  console.log(e.target.value.length)
  if (e.target.value.length <= 3) {
    errorMessageRef.textContent = 'To short';
  } else {
    errorMessageRef.textContent = 'Good'
  }
},1000)

const userNameRef = document.querySelector('#userName');
console.log(userNameRef)
const errorMessageRef = document.querySelector('.validate-message');
console.log(errorMessageRef)
userNameRef.addEventListener('input', debouncedUserNameHandler )