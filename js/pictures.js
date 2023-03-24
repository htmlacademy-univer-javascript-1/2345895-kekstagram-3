export function renderPictures(data) {
  const pictureTemplate = document.querySelector('#picture');
  const picturesContainet = document.querySelector('.pictures');
  const fragment = new DocumentFragment();

  data.forEach((item) => {
    const pictures = pictureTemplate.content.cloneNode(true);
    const pictureImg = pictures.querySelector('.picture__img');
    const pictureLikes = pictures.querySelector('.picture__likes');
    const pictureComments = pictures.querySelector('.picture__comments');

    pictureImg.src = item.url;
    pictureLikes.textContent = item.likes;
    pictureComments.textContent = item.comments;

    fragment.appendChild(pictures);
  });

  picturesContainet.appendChild(fragment);
}
