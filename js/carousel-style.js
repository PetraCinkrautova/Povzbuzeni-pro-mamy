const wrapper = document.querySelector('.reviews');
const track = document.querySelector('.reviews__track');
const items = document.querySelectorAll('.reviews__box');

let index = 0;
let interval;

function moveNext() {
  index++;

  const itemWidth = items[0].offsetWidth + 20;
  track.style.transform = `translateX(-${index * itemWidth}px)`;

  // 👉 když jsme na posledním prvku
  if (index >= items.length) {
    setTimeout(() => {
      track.style.transition = 'none'; // vypnout animaci
      track.style.transform = 'translateX(0)';
      index = 0;

      // vrátit animaci zpět
      setTimeout(() => {
        track.style.transition = 'transform 0.8s ease-in-out';
      }, 50);
    }, 800); // musí odpovídat délce transition
  }
}

function start() {
  interval = setInterval(moveNext, 8000);
}

function stop() {
  clearInterval(interval);
}

wrapper.addEventListener('mouseenter', stop);
wrapper.addEventListener('mouseleave', start);

start();