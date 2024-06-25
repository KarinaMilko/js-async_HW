// 1. Напишіть функцію printNumbers(from, to, interval),
// яка послідовно виводить у консоль цілі числа,
// починаючи з from і закінчуючи to,
// з інтервалом між виведенням сусідніх чисел у interval мс.
// Реалізуйте перший або обидва варіанти рішення:
// - Використовуючи setInterval.

function printNumbers(from, to, interval) {
  let current = from;

  if (!Number.isInteger(from) || !Number.isInteger(to) || from > to) {
    throw new Error(`Number must be Integer and no more ${to}`);
  }

  const numberId = setInterval(f, interval);
  console.log(current);
  function f() {
    if (current < to) {
      current++;
      console.log(current);
    } else {
      clearInterval(numberId);
    }
  }
}

// printNumbers(8, 11, 1000);

// - *Використовуючи рекурсивний setTimeout (https://uk.javascript.info/settimeout-setinterval).

function printNumbers(from, to, interval) {
  let current = from;

  if (!Number.isInteger(from) || !Number.isInteger(to) || from > to) {
    throw new Error(`Number must be Integer and no more ${to}`);
  }
  const numberId = setTimeout(f, interval);

  function f() {
    console.log(current);
    if (current < to) {
      setTimeout(f, interval);
    }

    current++;
  }
}

// printNumbers(7, 11, 1000);

// 2. *Виводити посилання через певний час після завантаження сторінки.
// Поки посилання не відображається,
// на його місці виводити зворотній відлік "Зачекайте хвилин:секунд"
