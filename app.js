const myName = document.getElementById('name');
const myInput = document.getElementById('name-input');
const myButton = document.getElementById('name-button');

myButton.addEventListener('click', () => {

    const userInput = myInput.value;

    myName.textContent = userInput;

    myInput.value = ''; 
});

const button = document.querySelector("#flip-button");
button.addEventListener("click", e => {

document.querySelector(".sticker").classList.toggle("flip-scale-down-diag-2")
})


const color1 = document.querySelector('#color1-button');
color1.addEventListener('click', () => {
  console.log('pink');

  document.querySelector("main").classList.toggle("color1")
  
});

const color2 = document.querySelector('#color2-button');
color2.addEventListener('click', () => {
  console.log('green');

  document.querySelector("main").classList.toggle("color2")
});

const color3 = document.querySelector('#color3-button');
color3.addEventListener('click', () => {
  console.log('blue');
 
  document.querySelector("main").classList.toggle("color3")
});