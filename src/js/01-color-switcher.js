const refs = {
  bodyColor: document.querySelector("body"),
  buttonStart: document.querySelector('[data-start]'),
  buttonStop: document.querySelector('[data-stop]'),
}
const PROMPT_DELAY = 1000;
let onGetRandomHexColor = false;

refs.bodyColor.style.backgroundColor = getRandomHexColor();
refs.buttonStart.addEventListener('click', onClickStart);
refs.buttonStop.addEventListener('click', onClickStop);

let intervalId = 0
function onClickStart() {
  if ( onGetRandomHexColor ) { return;}
  setInterval(() => {  
    onGetRandomHexColor = true;
   refs.bodyColor.style.backgroundColor = getRandomHexColor(); 
  }, PROMPT_DELAY)
    intervalId += 1;
}

function onClickStop() {
  clearInterval(intervalId);
  onGetRandomHexColor = false;
}

// Для генерування випадкового кольору 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}