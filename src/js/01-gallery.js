import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

for (const image of galleryItems) {
  const galleryElement = ` <li>
<a class="gallery__item" href= "${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    
    alt="" title =${image.description}"
  />
</a>
</li>`;
  gallery.innerHTML += galleryElement;
}
const lightbox = new SimpleLightbox('.gallery li a');
console.log(galleryItems);
