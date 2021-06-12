'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const butnCloseMod = document.querySelector('.close-modal');
const btnsOpenMOd = document.querySelectorAll('.show-modal');
//console.log(btnsOpenMOd);
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenMOd.length; i++)
  btnsOpenMOd[i].addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

butnCloseMod.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});
