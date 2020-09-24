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

// I'm at a lost for what I am doing wrong here.

const newColor1 = document.querySelector("main");
color1.addEventListener('click', () => {
  console.log('blue');
  const color1 = document.body; 
  color1-button.classList.toggle('color1');
});

const newColor2 = document.querySelector("main");
color2.addEventListener('click', () => {
  console.log('blue');
  const color2 = document.body; 
  color2-button.classList.toggle('color2');
});

const newColor3 = document.querySelector("main");
color3.addEventListener('click', () => {
  console.log('blue');
  const color3 = document.body; 
  color3-button.classList.toggle('color3');
});