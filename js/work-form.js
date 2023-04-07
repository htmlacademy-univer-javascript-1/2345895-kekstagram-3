const fileInput = document.querySelector('#upload-file');
const photoEditor = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const imageForm = document.querySelector('.img-upload__form');
const editablePhoto = document.querySelector('#editable-photo');

fileInput.addEventListener('change', function() {
  photoEditor.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

function resetImageEditor() {
  photoEditor.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imageForm.reset();
}

document.addEventListener('keyup', function(event) {
  if (event.key === 'Escape') {
    resetImageEditor();
  }
});

closeButton.addEventListener('click', function() {
  resetImageEditor();
});
