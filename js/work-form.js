const fileInput = document.querySelector('#upload-file');
const photoEditor = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const imageForm = document.querySelector('.img-upload__form');
const editablePhoto = document.querySelector('#ed-fot');


function photoCloseEdit() {
  photoEditor.classList.add('hidden');
  document.body.classList.remove('modal-open');

  imageForm.reset();
  editablePhoto.removeAttribute('style');
  editablePhoto.removeAttribute('class');

  }

fileInput.addEventListener('change', function() {
  photoEditor.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

function resetImageEditor() {
  photoEditor.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageForm.reset();
  editablePhoto.removeAttribute('style');
  editablePhoto.removeAttribute('class');
}

document.addEventListener('keyup', function(event) {
  if (event.key === 'Escape') {
    resetImageEditor();
  }
});

closeButton.addEventListener('click', function() {
  resetImageEditor();
});

const zoomInButton = document.querySelector('.scale__control--bigger');
const zoomOutButton = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');

function zoomInPhoto() {
  const scale = Number(scaleValue.value.replace('%', ''));
  if (scale !== 100) {
    const newScale = scale + 25;
    editablePhoto.style = `transform: scale(${newScale / 100})`;
    scaleValue.value = `${newScale}%`;
  }
}

function zoomOutPhoto() {
  const scale = Number(scaleValue.value.replace('%', ''));
  if (scale !== 25) {
    const newScale = scale - 25;
    editablePhoto.style = `transform: scale(${newScale / 100})`;
    scaleValue.value = `${newScale}%`;
  }
}

const effectButtons = imageForm.querySelectorAll('.effects__radio');
let checkedButton = imageForm.querySelector('#effect-none');
function effectChange(evt) {
  const pressedButton = evt.target;
  if (pressedButton !== checkedButton) {
    checkedButton.checked = false;
    pressedButton.checked = true;
    editablePhoto.classList.add(`effects__preview--${pressedButton.value}`);
    editablePhoto.classList.remove(`effects__preview--${checkedButton.value}`);
    checkedButton = pressedButton;
  }
}
effectButtons.forEach((button) => {
  button.addEventListener('click', effectChange);
});

zoomInButton.addEventListener('click', zoomInPhoto);
zoomOutButton.addEventListener('click', zoomOutPhoto);

export{photoCloseEdit};
