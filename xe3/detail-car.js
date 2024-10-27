const images = ['02.webp', '03.webp', '04.webp', '05.webp', '06.webp'];
let currentIndex = 0;

function changeImage(imageUrl) {
    document.getElementById('main-image').src = imageUrl;
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    document.getElementById('main-image').src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    document.getElementById('main-image').src = images[currentIndex];
}


