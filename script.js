var index = 0;
var lis = document.querySelectorAll('.carousel li');
var elNext = document.querySelector('.next');
var elPrev = document.querySelector('.prev');
var anim = document.querySelector('.anim');

var navigation = function(index) {
  elPrev.classList.toggle('hidden', index === 0);
  elNext.classList.toggle('hidden', index === 3);
}

var jump = function(to) {
  lis[index].classList.remove('visible');
  index = to;
  if (index > 3)
    index = 0;
  if (index < 0)
    index = 3;
  lis[index].classList.add('visible');
  lis[index].classList.add('anim');
  navigation(index);
}

elPrev.addEventListener('click', function() {
  jump(index - 1);
});

elNext.addEventListener('click', function() {
  jump(index + 1);
});

navigation(0);