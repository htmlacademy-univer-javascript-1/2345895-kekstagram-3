import { generatePhotos } from './hedFunction.js';
import { renderPictures } from './pictures.js';
import { photolod } from './server-work.js';
import { showError } from './server-work.js';
generatePhotos();

photolod(renderPictures, showError);
