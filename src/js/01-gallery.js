// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line

const galeryList = document.querySelector(".gallery");

const galeryElements = galleryItems.map((el) => 
`<li class = "gallery__item"> 
<a class="gallery__link" href="${el.original}"> 
<img class = "gallery__image"  src="${el.preview}" alt="${el.description}"> 
</a> 
</li>`).join('');
galeryList.insertAdjacentHTML("afterbegin",galeryElements);

const gallery = new SimpleLightbox('.gallery a', {
    captionsData:"alt",
    captionDelay: 250,
    onShow:() => {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyPress);
    },
    onClose: () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyPress);
    }
  });

  function handleKeyPress(event) {
    if (event.key === "Escape") {
        gallery.close();
      }
  }

console.log(galleryItems);
