import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryLi = ({
  preview,
  original,
  description,
}) => `<li class="gallery__item">
  <a class = "gallery__link" href = "${original}">
  <img class = "gallery__image" src = "${preview}"
  alt = "${description}"
   />
  </a></li>`;

const galleryListLi = galleryItems.map(el => galleryLi(el)).join('');
gallery.innerHTML = galleryListLi;

gallery.addEventListener('click', onClickCollectionGal);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
function onClickCollectionGal(e) {
  e.preventDefault();
}
console.log(galleryItems);
