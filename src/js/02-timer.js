import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
};

let selectedTime = null;
class Timer {
// constructor{

// }

faceTimer({ days, hours, minutes, seconds }) {
    refs.daysEl.textContent = days;
    refs.hoursEl.textContent = hours;
    refs.minutesEl.textContent = minutes;
    refs.secondsEl.textContent = seconds;
  };
}
const fp = flatpickr(refs.inputEl,{
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  maxDate: '19.12.2022',
  dateFormat: 'Y-m-d H:i',
  minuteIncrement: 1,
  //   Регулює крок для введення хвилин (включно з прокручуванням
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
        alert`Please choose a date in the future`;
        // Notiflix.Notify.warning('Please choose a date in the future');
        // selectedDates[0] = Date.now(); 
    } else {
        refs.btnStart.disabled = false;
        selectedDates[0] = selectedTime;
    }
}
// onOpen() {
//     console.log('bb');
//   },
//     // Shows opens the calendar
})

// const options = 


// };


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
};



// refs.btnStart.addEventListener('click', onClickBtnStartTimer);

// function onClickBtnStartTimer() {
//   // залишок часу
//   let t = Date.parse(maxDate) - Date.parse(Date.now());
// }
