require('./style.source.scss');

let html = require('./markup.source.html');

export default (function() {
    // setup
    const UID = 'n86510d1241100465';
    const selector = `div.newsroom[data-app="${UID}"]`;
    const json = window['n86510d1241100465-1'] || {};
    const container = document.querySelector(selector);
    if (json.inline) container.classList.add('inline');
    container.innerHTML = html;
    const loading = container.querySelector('div#loading');

    // app
    const appElem = container.querySelector('div#app'),
        sliderElem = appElem.querySelector('div#slider'),
        imageElems = {
            previous: sliderElem.querySelector('div#previous'),
            next: sliderElem.querySelector('div#next'),
            current: sliderElem.querySelector('div#current'),
        },
        captionElem = appElem.querySelector('span#description'),
        slideNames = ['previous', 'next', 'current'],
        slideData = json.slides;

    let slideNums = {
        previous: slideData.length - 1,
        current: 0,
        next: 1
    };

    const getSlideNum = (num) => {
        if (num < 0) return slideData.length - 1;
        else if (num === slideData.length) return 0;
        else return num;
    };

    const updateSlideNums = (num) => {
        slideNums.current = slideNums.current + num;
        slideNums.current = getSlideNum(slideNums.current);
        slideNums.previous = getSlideNum(slideNums.current - 1);
        slideNums.next = getSlideNum(slideNums.current + 1);
    };

    const cacheImageElems = () => slideNames.forEach(name => imageElems[name] = sliderElem.querySelector(`div#${name}`));

    const updateSlides = () => slideNames.forEach(name => {
        const slide = slideData[slideNums[name]];
        imageElems[name].style.backgroundImage = `url(${slide.image})`;
        imageElems[name].querySelector('span').innerHTML = slide.html;
        captionElem.innerHTML = slide.caption;
    });

    const reassignIdsToSlides = direction => {
        if (direction === 'Right') {
            imageElems.previous.setAttribute('id', 'current');
            imageElems.next.setAttribute('id', 'previous');
            imageElems.current.setAttribute('id', 'next');
        } else {
            imageElems.previous.setAttribute('id', 'next');
            imageElems.next.setAttribute('id', 'current');
            imageElems.current.setAttribute('id', 'previous');
        }
    };

    const applyAnimations = direction => {
        imageElems.previous.onclick = null;
        imageElems.next.onclick = null;
        if (direction === 'Right') updateSlideNums(-1)
        else updateSlideNums(1);
        slideNames.forEach(name => imageElems[name].style.animationName = '');
        captionElem.style.animationName = '';
        setTimeout(() => {
            captionElem.style.animationName = 'fadeOut';
            slideNames.forEach(name => {
                imageElems[name].style.animationName = `${name}Slide${direction}`;
            });
            setTimeout(() => {
                reassignIdsToSlides(direction);
                cacheImageElems();
                updateSlides();
                if (direction === 'Right') imageElems.previous.style.animationName = 'fadeIn';
                else imageElems.next.style.animationName = 'fadeIn';
                captionElem.style.animationName = 'fadeIn';
                attachEventListeners();
                imageElems.current.onclick = () => clearInterval(automateSlides);
                imageElems.current.scrollTop = 0;
            }, 500);
        }, 1);
    };

    const attachEventListeners = () => {
        imageElems.previous.onclick = () => {
            clearInterval(automateSlides);
            applyAnimations('Right');
        };
        imageElems.next.onclick = () => {
            clearInterval(automateSlides);
            applyAnimations('Left');
        }
    };

    attachEventListeners();
    updateSlides();

    const automateSlides = setInterval(() => applyAnimations('Left'), 5000);
    imageElems.current.onclick = () => clearInterval(automateSlides);


    // display
    loading.style.display = 'none';
    appElem.style.display = 'block';
})();