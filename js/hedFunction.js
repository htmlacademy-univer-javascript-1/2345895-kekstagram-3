import { getRandomNumber } from './pulFunction.js';

function generatePhotos() {

  const photos = [];
  for (let i = 0; i < 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Dima ${i}`,
      likes: getRandomNumber(15, 200),
      comments: getRandomNumber(0, 200)
    };
    photos.push(photo);
  }
  return photos;
}

export { generatePhotos };
