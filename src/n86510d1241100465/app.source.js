require('./style.source.scss');

let html = require('./markup.source.html');
const json = require('./data.source.js');

(function () {
    // setup
    const UID = 'n86510d1241100465';
    const selector = `div.newsroom[data-app="${UID}"]`;
    const container = document.querySelector(selector);
    if (json.inline) container.classList.add('inline');
    container.innerHTML = html;
    const loading = container.querySelector('div#loading');
    // app
    const app = container.querySelector('div#app');
    const slider = app.querySelector('div#slider');
    const loadedImage = slider.querySelector('div#loaded-image');
    const nextImage = slider.querySelector('div#next-image');
    const previousImage = slider.querySelector('div#previous-image');
    const backBtn = slider.querySelector('div#back');
    const nextBtn = slider.querySelector('div#forward');
    const description = app.querySelector('span#description')
    const slides = json.slides;

    let currentSlide = slides.length - 1;
    let loaded = false;

    function resetAnimations() {
        loadedImage.style.animationName = '';
        nextImage.style.animationName = '';
        previousImage.style.animationName = '';
        description.style.animationName = '';
    }

    function loadSlide(direction) {
        const slide = slides[currentSlide];
        if (!loaded) {
            loadedImage.style.backgroundImage = `url(${slide.image})`;
            description.innerHTML = slide.text;
            loadedImage.style.animationName = 'slideInLeft';
            description.style.animationName = 'fadeIn';
            loaded = true;
            setTimeout(resetAnimations, 500);
        } else {
            description.style.animationName = 'fadeOut';
            const nextSlide = (currentSlide < slides.length) ? currentSlide : 0;
            const previousSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
            description.innerHTML = slide.text;
            description.style.animationName = 'fadeIn';
            if (direction === 'next') {
                nextImage.style.backgroundImage = `url(${slides[nextSlide].image})`;
                loadedImage.style.animationName = 'slideOutLeft';
                nextImage.style.animationName = 'slideInLeft';
                setTimeout(function () {
                    loadedImage.style.backgroundImage = `url(${slide.image})`;
                    resetAnimations();
                }, 500);
            } else if (direction === 'previous') {
                loadedImage.style.backgroundImage = `url(${slide.image})`;
                nextImage.style.animationName = 'slideOutRight';
                loadedImage.style.animationName = 'slideInRight';
                setTimeout(function () {
                    nextImage.style.backgroundImage = `url(${slide.image})`;
                    resetAnimations();
                }, 500);
            }
        }
    }

    function updateSlide(direction) {
        if (direction === 'next') {
            currentSlide++;
            currentSlide = (currentSlide < slides.length) ? currentSlide : 0;
        } else if (direction === 'previous') {
            currentSlide--;
            currentSlide = (currentSlide < 0) ? slides.length - 1 : currentSlide;
        }
        loadSlide(direction);
    }

    nextBtn.onclick = function () {
        clearInterval(autoslide);
        updateSlide('next');
    }

    backBtn.onclick = function () {
        clearInterval(autoslide);
        updateSlide('previous')
    }

    let autoslide = setInterval(function () {
        updateSlide('next');
    }, 5000);
    updateSlide('next');

    // display
    loading.style.display = 'none';
    app.style.display = 'block';
})();