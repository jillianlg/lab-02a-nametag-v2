const myName = document.getElementById('name');
const myInput = document.getElementById('name-input');
const myButton = document.getElementById('name-button');

myButton.addEventListener('click', () => {

    const userInput = myInput.value;

    myName.textContent = userInput;
});

const button = document.querySelector("#flip-button");
button.addEventListener("click", e => {

document.querySelector(".sticker").classList.toggle("flip-scale-down-diag-2")
})