const form = document.querySelector('.form');
const amount = document.querySelector('.amount');
const totalRef = document.createElement('p');

//form.style.display = flex;
//form.style.flexDirection = colum;

form.append(totalRef);

totalRef.before('Общая стоимость:');
totalRef.after('грн');

const formHandler = (form) => {
     const {
        elements: {
            price,
            quantity
        }       
    } = form;

     const totalPrice = Number(price.value * quantity.value).toFixed(2);
    console.log(totalPrice)

    amount.innerHTML = quantity.value;
    totalRef.innerHTML = totalPrice;
}
const handler = e => {formHandler(form)}
form.addEventListener('input', _.debounce(handler,500))

document.addEventListener('DOMContentLoaded', e => {
    formHandler(form)
})

const neetPriceRef = document.querySelector('#price');
const serverRequestRef = document.querySelector('.server-amount');
const debounceInput = _.debounce(function (e) {
    serverRequestRef.innerHTML = Number(serverRequestRef.innerHTML) + 1
},1000);
neetPriceRef.addEventListener('input',debounceInput)