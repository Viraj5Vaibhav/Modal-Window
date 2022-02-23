'use strict';

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModalVar = openModal => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalVar = closeModal => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModalVar);
}

btnCloseModal.addEventListener('click', closeModalVar);

overlay.addEventListener('click', closeModalVar);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) closeModalVar();
  }
});
