const changeSrc = () => {
  side += 1;
  if (side == 7) {
    side = 1;
  }

  picture.src = 'img/side' + side + '.svg';
};

let side = 1;

const picture = document.querySelector('.dice');
picture.addEventListener('click', changeSrc);
