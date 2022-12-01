import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/material_blue.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
};
const PROMPT_DELEY = 1000;
let selectedTime = null;
class Timer {
  constructor() {
    this.intervalId = null;
    this.isActive = false;
  }

  startTimer() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      // залишок часу
      const deltaTime = selectedTime - currentTime;
      const time = convertMs(deltaTime);
      this.faceTimer(time);

      if (deltaTime <= 0) {
        //  Для остановки таймера используется функция clearInterval, которая
        //  принимает уникальный номер того таймера, который нужно остановить.
        clearInterval(this.intervalId);
        this.isActive = false;
      }
    }, PROMPT_DELEY);
  }

  faceTimer({ days, hours, minutes, seconds }) {
    refs.daysEl.textContent = days;
    refs.hoursEl.textContent = hours;
    refs.minutesEl.textContent = minutes;
    refs.secondsEl.textContent = seconds;
  }
}
const options = flatpickr(refs.inputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  //   Регулює крок для введення хвилин (включно з прокручуванням
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notify.warning('Please choose a date in the future');
      refs.btnStart.disabled = true;
      selectedTime = Date.now();
    } else {
      refs.btnStart.disabled = false;
      selectedTime = selectedDates[0];
    }
  },
});

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
}

const timer = new Timer();

// Функція bind()створює нову зв'язану функцію
refs.btnStart.addEventListener('click', timer.startTimer.bind(timer));
