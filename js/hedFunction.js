import { getRandomNumber } from './pul-function.js';

function generatePhotos() {

  const photos = [];
  for (let i = 1; i <= 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Dima ${i}`,
      likes: getRandomNumber(15, 200),
      comments: getRandomNumber(0, 200)
    };
    photos [i - 1] = photo;
  }
  return photos;
}

export { generatePhotos };
