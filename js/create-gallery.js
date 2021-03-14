import  cards from "./gallery-items.js";


const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createPictureCards(cards);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createPictureCards(gallery) {
    return gallery
        .map(({preview, original, description}) => {
        return `<li class="gallery__item">
                <a
                class="gallery__link"
                href="${original}"
                >
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>
            </li>`;
            
        })
        .join('');
   
}
