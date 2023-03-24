import { generatePhotos } from './hedFunction.js';
import { renderPictures } from './pictures.js';
generatePhotos();

const data = generatePhotos(25);

renderPictures(data);
