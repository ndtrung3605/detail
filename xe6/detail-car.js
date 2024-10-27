const images = ['Kia_Carens1.5G_IVT_2023.4.webp', 'Kia_Carens1.5G_IVT_2023.5.webp', 'Kia_Carens1.5G_IVT_2023.6.webp', 'Kia_Carens1.5G_IVT_2023.7.webp', 'Kia_Carens1.5G_IVT_2023.8.webp'];
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


