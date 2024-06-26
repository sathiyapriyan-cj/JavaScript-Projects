'use strict';

// Selecting elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function to open the modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Adding event listeners to open modal buttons
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', function () {
    console.log('Button clicked');
    openModal();
  });
});

// Adding event listeners to close modal and overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Optional: Close modal when pressing the 'Escape' key
// document.addEventListener('keydown', function (event) {
//   if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

/* How to handle keypress events

    - how to respond to keyboard events.
    - it is global events. because they do not happen on one specific element.
    - three types of keyboard events
      - keydown - when a key is pressed down.
      - keyup - when a key is released.
      - keypress - when a key is pressed down and released.

*/

document.addEventListener('keydown', function (event) {
  console.log('A key was pressed!', event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
