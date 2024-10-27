const images = ['00000002.webp', '00000003.webp', '00000004.webp', '00000005.webp', '00000006.webp'];
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


