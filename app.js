    const images = ['stainless-steel-details-equipments-machinery.jpg','Screenshot.png','production-process-details.jpg','istockphoto-1139874304-612x612.jpg']; // Add more image URLs as needed
    const pageHeader = document.querySelector('.page-header');
    let currentImage = 0;
    
    function changeBackground() {
        pageHeader.style.backgroundImage = `url(${images[currentImage]})`;
        currentImage = (currentImage + 1) % images.length; 
    }
    
    setInterval(changeBackground, 5000); // Change image every 5 seconds (adjust as needed)


    let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const brandCardContainers = document.querySelectorAll('.brand-card-container');

  for (i = 0; i < brandCardContainers.length; i++) {
    brandCardContainers[i].style.display = 'none';
  }

  slideIndex++;

  if (slideIndex > brandCardContainers.length) {
    slideIndex = 1;
  }

  brandCardContainers[slideIndex - 1].style.display = 'flex';

  setTimeout(showSlides, 3000); // Change slide every 5 seconds (adjust as needed)
}

    
