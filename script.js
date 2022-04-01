'use strict';

// Selecting Classes
const count = document.querySelector('.count');
const add = document.querySelector('.acrement');
const reset = document.querySelector('.btn_reset');
const sub = document.querySelector('.decrement');

// Adding event handlers
add.addEventListener('click', function () {
  count.innerHTML++;
});

sub.addEventListener('click', function () {
  count.innerHTML--;
});

reset.addEventListener('click', function () {
  count.innerHTML = 0;
});
