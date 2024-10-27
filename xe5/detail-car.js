const images = ['00002.webp', '00003.webp', '00004.webp', '00005.webp', '00006.webp'];
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


