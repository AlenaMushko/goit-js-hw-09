import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notiflix.Notify.warning('Please choose a date in the future');

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
};

// class Timer {
// constructor{

// }
// }
const fp = flatpickr(refs.inputEl, {
  dateFormat: 'Y-m-d H:i',
  minDate: 'today',
  maxDate: '19.12.2022',
  time_24hr: true,
//   defaultDate: new Date(),
// Встановлює початкові вибрані дати.
// Якщо ви використовуєте mode: "multiple"календар діапазону , 
// Arrayнадайте Dateоб’єкти або масив рядків дат, які слідують 
// за вашим dateFormat.
// В іншому випадку ви можете надати один об’єкт Date або рядок дати.
  minuteIncrement: 1,
//   Регулює крок для введення хвилин (включно з прокручуванням
  altInput: true,
  //   Покажіть користувачеві читабельну дату (відповідно до altFormat)
  parseDate: (datestr, format) => {
    return moment(datestr, format, true).toDate();
  },
// parseDate(dateStr, dateFormat)
// Розбирає рядок дати або мітку часу та повертає дату
// За бажанням передайте true як другий аргумент, щоб змусити 
// активувати будь-які події onChange. І якщо ви передаєте рядок
//  дати у форматі, відмінному від вашого dateFormat, надайте, 
//  dateStrFormatнаприклад , "m/d/Y"
  formatDate: (date, format, locale) => {
    // locale can also be used
    return moment(date).format(format);
  },
//   formatDate(dateObj, formatStr)
// dateObj є датою та formatStrє рядком, що складається з маркерів 
// форматування. Повернене значення Рядкове представлення dateObj, 
// відформатований відповідно до formatStr
onChange: function(selectedDates, dateStr, instance) {
    //...
},
// onChange(){},
// onChange запускається, коли користувач вибирає дату або змінює 
// час у вибрану дату.

//   onClose: function(selectedDates, dateStr, instance){
//    // ...
// }
onClose(selectedDates) {
    console.log(selectedDates[0]);
},
// open()
// Shows/opens the calendar

// Вибирати дату
// fp.selectedDates
});

// залишок часу
let t = Date.parse(endtime) - Date.parse(new Date());
  
  



// Вибір дати
// Метод onClose() з об'єкта параметрів викликається щоразу під час закриття
// елемента інтерфейсу, який створює flatpickr. Саме у ньому варто обробляти дату,
//  обрану користувачем. Параметр selectedDates - це масив обраних дат, тому ми
//  беремо перший елемент.

// Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
// Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в
// майбутньому.
// Натисканням на кнопку «Start» починається відлік часу до обраної дати з моменту
//  натискання.
// Відлік часу
// Натисканням на кнопку «Start» скрипт повинен обчислювати раз на секунду,
// скільки часу залишилось до вказаної дати, і оновлювати інтерфейс таймера,
// показуючи чотири цифри: дні, години, хвилини і секунди у форматі xx:xx:xx:xx.

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