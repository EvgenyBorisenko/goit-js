import gallery from "./gallery-items.js";

const mainGallery = document.querySelector(".js-gallery");
const divLightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox___image");

gallery.forEach(element => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");

  const images = document.createElement("img");
  images.classList.add("gallery__image");

  const gallerySpan = document.createElement("span");
  gallerySpan.classList.add("gallery__icon");

  const material = document.createElement("i");
  material.classList.add("material-icons");
  material.textContent = "zoom_out_map";

  images.setAttribute("src", element.preview);
  images.setAttribute("data-source", element.original);
  images.setAttribute("alt", element.description);

  gallerySpan.append(material);
  link.append(images, gallerySpan);
  galleryItem.append(link);
  mainGallery.append(galleryItem);

  // material.append(lightbox__button);
});

// mainGallery.addEventListener("click", handleClickGallery(event) {
//   // function handleClickGallery (event) {
//   //   divLightbox.classList.add("is-open");
//   //   lightbox.src = event.target.dataset.source;
//   // };
// });

mainGallery.addEventListener("click", function(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  divLightbox.classList.add("is-open");

  lightboxImage.src = e.target.dataset.source;
  lightboxImage.alt = e.target.dataset.source;
});

divLightbox.addEventListener("click", function(e) {
  e.preventDefault();
  if(e.target === lightboxImage){
    return;
  }
  divLightbox.classList.remove("is-open");  

  
  lightboxImage.src = "";
  lightboxImage.alt = "";
});

window.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    divLightbox.classList.remove("is-open");
    lightboxImage.src = "";
    lightboxImage.alt = "";
  }
});



//новая фунция подобная мейн гелери    создаем такую же только с модалкой 
//   условие е таргет не равно  картинка 
// divLightbox.classList.add("is-open"); ( удаляем   ремув)
// добавляем src с ппустыми полями

