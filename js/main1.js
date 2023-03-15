function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generatePhotos() {

    const photos = [];
    for (let i = 0; i < 25; i++) {
      const photo = {
        id: i,
        url: `photos/${i}.jpg`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: getRandomNumber(15, 200),
        comments: getRandomNumber(0, 200)
      };
      photos.push(photo);
    }
    return photos;
  }
  
  function maxLineString (string, length) {
    return string.length <= length;
  }
  const photos = generatePhotos();
  console.log(photos[0]);
  