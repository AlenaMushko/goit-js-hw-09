// 1) користувач буде вводити першу затримку в мілісекундах,
// 2) Для відображення повідомлень користувачеві, замість console.log(), використовуй
// бібліотеку notiflix.
// <form class="form">
//   <label>
//     First delay (ms)
//     <input type="number" name="delay" required />
//   <label>
//     Delay step (ms)
//     <input type="number" name="step" required />
//   <label>
//     Amount
//     <input type="number" name="amount" required />
//   <button type="submit">Create promises</button

import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
}

refs.formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit() {
  createPromise(position, delay);

}
// Напиши скрипт, який на момент сабміту форми викликає функцію
// createPromise(position, delay) стільки разів, скільки ввели в поле amount.
//  Під час кожного виклику передай їй номер промісу (position), що створюється,
//   і затримку, враховуючи першу затримку (delay), введену користувачем,
//   і крок (step).

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// Доповни код функції createPromise таким чином, щоб вона повертала один проміс,
//  який виконується або відхиляється через delay часу. Значенням промісу повинен
//  бути об'єкт, в якому будуть властивості position і delay зі значеннями
//  однойменних параметрів. Використовуй початковий код функції для вибору того,
//   що потрібно зробити з промісом - виконати або відхилити.

createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Report.success('Title', '✅ Fulfilled promise ${position} in ${delay}ms');
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Report.failure('Title', '❌ Rejected promise ${position} in ${delay}ms');
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });






















