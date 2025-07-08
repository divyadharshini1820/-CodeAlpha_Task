const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const filterButtons = document.querySelectorAll('.filters button');

let currentIndex = 0;
let imagesArray = Array.from(galleryImages);

// Lightbox Open
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

// Lightbox Close
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Next Button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagesArray.length;
    lightboxImg.src = imagesArray[currentIndex].src;
});

// Prev Button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    lightboxImg.src = imagesArray[currentIndex].src;
});

// Close lightbox on outside click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        imagesArray.forEach(img => {
            if (filter === 'all' || img.getAttribute('data-category') === filter) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    });
});
