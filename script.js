document.addEventListener('DOMContentLoaded', function () {
  const imageGrid = document.getElementById('imageGrid');

  // Sample image URLs
  const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'sample.png'
    // Add more image URLs as needed
  ];

  // Populate the grid with images
  imageUrls.forEach((imageUrl, index) => {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = `Image ${index + 1}`;
    imageElement.classList.add('grid-item');

    imageGrid.appendChild(imageElement);
  });
});
