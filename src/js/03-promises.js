import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
};
let MAX_PROMPT = 0;
let position = 0;
let delayValue = 0;

refs.formEl.addEventListener('submit', onFormElSubmit);
// refs.formEl.addEventListener('input', onFormElInput);

function onFormElSubmit(e) {
  // заборона по замовчуванню
  e. preventDefault();
position += 1;
  onFormElInput();
  
}

function onFormElInput() {
  const { delay, step, amount } = refs.formEl.elements;
 delayValue = delay.value;
  MAX_PROMPT = amount.value;
  // виклик функцііі MAX_PROMPT разів
  // for( let position = 1; position === MAX_PROMPT )
  if (position === MAX_PROMPT) {
    createPromise(position, delayValue)
  .then(({ position, delayValue }) => {
    setTimeout(() => {
    Notiflix.Report.success('Title', '✅ Fulfilled promise ${position} in ${delayValue}ms');
    console.log(`✅ Fulfilled promise ${position} in ${delayValue}ms`);  
    }, delayValue);
  })
  .catch(({ position, delayValue }) => {
    setTimeout(() => {
      Notiflix.Report.failure('Title', '❌ Rejected promise ${position} in ${delayValue}ms');
    console.log(`❌ Rejected promise ${position} in ${delayValue}ms`);
    }, delayValue);
  });
   return;
  delayValue += step;
 
  }
}

function createPromise(position, delayValue) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delayValue});
  } else {
    Reject({position, delayValue});
  }
}



