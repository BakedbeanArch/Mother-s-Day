const sections = document.querySelectorAll('.screen');
const nextBtn = document.getElementById('nextBtn');
const revealBtn = document.getElementById('revealGift');

nextBtn.addEventListener('click', () => {
  document.querySelector('.active').classList.remove('active');
  sections[1].classList.add('active');
});

revealBtn.addEventListener('click', () => {
  document.getElementById('triggerObject').classList.add('hidden');
  document.querySelector('#section2').classList.add('active');
  // Additional animations or sound triggers can go here
});