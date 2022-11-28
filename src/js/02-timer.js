
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import 'flatpickr/dist/themes/dark.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';



const refs = {
    btnStart: document.querySelector('button[data-start]'),
}

// class Timer {

// }

// const fp = flatpickr("#datetime-picker", {
//     enableTime: true,
//     dateFormat: "Y-m-d H:i",
//     minDate: "today",
//     maxDate: "19.12.2022"
// });

function flatpickr(selector, options) {
    const selector = {
        altInput: true,
        dateFormat: "YYYY-MM-DD",
        altFormat: "DD-MM-YYYY",
        allowInput: true,
        parseDate: (datestr, format) => {
            return moment(datestr, format, true).toDate();
        },
        formatDate: (date, format, locale) => {
            // locale can also be used
            return moment(date).format(format);
        }
    }
    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            console.log(selectedDates[0]);
        },
    };
}

// Вибір дати
// Метод onClose() з об'єкта параметрів викликається щоразу під час закриття 
// елемента інтерфейсу, який створює flatpickr. Саме у ньому варто обробляти дату,
//  обрану користувачем. Параметр selectedDates - це масив обраних дат, тому ми 
//  беремо перший елемент.

// Якщо користувач вибрав дату в минулому, покажи window.alert() з текстом 
// "Please choose a date in the future".(Для відображення повідомлень користувачеві, замість window.alert(), 
// використовуй бібліотеку notiflix.)
// Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
// Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в 
// майбутньому.
// Натисканням на кнопку «Start» починається відлік часу до обраної дати з моменту
//  натискання.
// Відлік часу
// Натисканням на кнопку «Start» скрипт повинен обчислювати раз на секунду, 
// скільки часу залишилось до вказаної дати, і оновлювати інтерфейс таймера, 
// показуючи чотири цифри: дні, години, хвилини і секунди у форматі xx:xx:xx:xx.

function addLeadingZero(value){
    return String(value).padStart(2, '0')
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
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}





