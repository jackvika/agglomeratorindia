document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); 

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.agglomerator-thumbnails .thumbnail');
    const mainImage = document.getElementById('main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const newSrc = this.getAttribute('data-large-src'); // Get the larger image source from the data attribute
            
            if (newSrc) {
                mainImage.style.opacity = 0; // Fade out the main image
                setTimeout(() => {
                    mainImage.src = newSrc; // Update the main image source
                    mainImage.style.opacity = 1; // Fade in the main image
                }, 300);

                // Remove 'selected' class from all thumbnails and add to the clicked one
                thumbnails.forEach(thumb => thumb.classList.remove('selected'));
                this.classList.add('selected');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail click event
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.dataset.largeSrc;
            mainImage.alt = this.alt;
        });
    });

    // Model selector change event
    const modelSelect = document.getElementById('model-select');
    const selectedModel = document.getElementById('selected-model');
    const mainMotor = document.getElementById('main-motor');
    const batchCapacity = document.getElementById('batch-capacity');
    const production = document.getElementById('production');
    const application = document.getElementById('application');
    const ldhm = document.getElementById('ldhm');
    const ppFilm = document.getElementById('pp-film');
    const ppHdpe = document.getElementById('pp-hdpe');

    modelSelect.addEventListener('change', function() {
        selectedModel.textContent = this.value;

        switch (this.value) {
            case 'PPM-40A':
                mainMotor.textContent = '10';
                batchCapacity.textContent = '4';
                production.textContent = '15-40';
                application.textContent = 'LD/HM, PP Film';
                ldhm.innerHTML = '<i class="fa fa-check"></i>';
                ppFilm.innerHTML = '<i class="fa fa-check"></i>';
                ppHdpe.innerHTML = '<i class="fa fa-times"></i>';
                break;
            case 'PPM-50A':
                mainMotor.textContent = '12';
                batchCapacity.textContent = '5';
                production.textContent = '20-50';
                application.textContent = 'LD/HM, PP Film, HDPE';
                ldhm.innerHTML = '<i class="fa fa-check"></i>';
                ppFilm.innerHTML = '<i class="fa fa-check"></i>';
                ppHdpe.innerHTML = '<i class="fa fa-check"></i>';
                break;
            case 'PPM-75A':
                mainMotor.textContent = '15';
                batchCapacity.textContent = '7.5';
                production.textContent = '30-75';
                application.textContent = 'LD/HM, PP Film, HDPE';
                ldhm.innerHTML = '<i class="fa fa-check"></i>';
                ppFilm.innerHTML = '<i class="fa fa-check"></i>';
                ppHdpe.innerHTML = '<i class="fa fa-check"></i>';
                break;
            case 'PPM-100A':
                mainMotor.textContent = '20';
                batchCapacity.textContent = '10';
                production.textContent = '50-100';
                application.textContent = 'LD/HM, PP Film, HDPE, PVC';
                ldhm.innerHTML = '<i class="fa fa-check"></i>';
                ppFilm.innerHTML = '<i class="fa fa-check"></i>';
                ppHdpe.innerHTML = '<i class="fa fa-check"></i>';
                break;
            case 'PPM-200A':
                mainMotor.textContent = '40';
                batchCapacity.textContent = '20';
                production.textContent = '100-200';
                application.textContent = 'LD/HM, PP Film, HDPE, PVC, PET';
                ldhm.innerHTML = '<i class="fa fa-check"></i>';
                ppFilm.innerHTML = '<i class="fa fa-check"></i>';
                ppHdpe.innerHTML = '<i class="fa fa-check"></i>';
                break;
            case 'PPM-300A':
                mainMotor.textContent = '60';
                batchCapacity.textContent = '30';
                production.textContent = '150-300';
                application.textContent = 'LD/HM, PP Film, HDPE, PVC, PET';
                ldhm.innerHTML = '<i class="fa fa-check"></i>';
                ppFilm.innerHTML = '<i class="fa fa-check"></i>';
                ppHdpe.innerHTML = '<i class="fa fa-check"></i>';
                break;
            case 'PPM-400A':
                mainMotor.textContent = '80';
                batchCapacity.textContent = '40';
                production.textContent = '200-400';
                application.textContent = 'LD/HM, PP Film, HDPE, PVC, PET';
                ldhm.innerHTML = '<i class="fa fa-check"></i>';
                ppFilm.innerHTML = '<i class "fa fa-check"></i>';
                ppHdpe.innerHTML = '<i class="fa fa-check"></i>';
                break;
            case 'PPM-500A':
                mainMotor.textContent = '100';
                batchCapacity.textContent = '50';
                production.textContent = '250-500';
                application.textContent = 'LD/HM, PP Film, HDPE, PVC, PET';
                ldhm.innerHTML = '<i class="fa fa-check"></i>';
                ppFilm.innerHTML = '<i class="fa fa-check"></i>';
                ppHdpe.innerHTML = '<i class="fa fa-check"></i>';
                break;
            // Add more cases if there are additional models
        }
    });
});
