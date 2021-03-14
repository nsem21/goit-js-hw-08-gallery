const gallery = document.querySelector('.js-gallery');


const refs = {
    module: document.querySelector('.js-lightbox'),
    contentPicture: document.querySelector('.lightbox__image'),
    btnCloseModule: document.querySelector('[data-action = "close-lightbox"]'),
    moduleOverlay: document.querySelector('.lightbox__overlay'),    
}

let currentItem;

gallery.addEventListener('click', onOpenModule);
refs.btnCloseModule.addEventListener('click', onCloseModule);
refs.moduleOverlay.addEventListener('click', onCloseModule);


function onOpenModule(event) {
    event.preventDefault();
    
    const isPicture = event.target.classList.contains('gallery__image');
    if (!isPicture) {
        return;
    }
    const currentPicture = event.target;
    currentItem = currentPicture.closest('.gallery__item');
    
    refs.module.classList.add('is-open');
          
    refs.contentPicture.src = currentPicture.dataset.source;
    refs.contentPicture.alt = currentPicture.alt;
    
    window.addEventListener('keydown', onKeyPress);
    
}

function onCloseModule() {
    window.removeEventListener('keydown', onKeyPress);
    refs.module.classList.remove('is-open');
    refs.contentPicture.src = '';
    refs.contentPicture.alt = '';
}

function toRight() {
    let nextItem;
    if (currentItem === gallery.lastElementChild) {
        nextItem = gallery.firstElementChild;
        
    } else {
        nextItem = currentItem.nextElementSibling;
    }   
    
    const nextPicture = nextItem.querySelector('.gallery__image');
    
    refs.contentPicture.src = nextPicture.dataset.source;
    
    currentItem = nextItem;
}

function toLeft() {
    let previousItem;
    if (currentItem === gallery.firstElementChild) {
        previousItem = gallery.lastElementChild;
        
    } else {
        previousItem = currentItem.previousElementSibling;
    }
   
    const previousPicture = previousItem.querySelector('.gallery__image');
    
    refs.contentPicture.src = previousPicture.dataset.source;
    currentItem = previousItem;
    
}

function onKeyPress (event) {

    switch (event.code) {
        case "Escape":
            onCloseModule();
            break;
        case "ArrowRight":
            toRight();
            break;
        case "ArrowLeft":
            toLeft();
            break;
        
    }
    
  
}
