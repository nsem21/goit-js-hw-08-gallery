import  cards from "./gallery-items.js";
console.log(cards);
const galleryRef = document.querySelector('.gallery');
const myMarkup = createPictureCards(cards);

galleryRef.insertAdjacentHTML('beforeend', myMarkup);

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
