require('./style.source.scss');

let html = require('./markup.source.html');
const json = require('./data.source.js');

export default (function () {
    // setup
    const UID = 'nf4c69b6f7d922516';
    const selector = `div.newsroom[data-app="${UID}"]`;
    const container = document.querySelector(selector);
    if (json.inline) container.classList.add('inline');
    container.innerHTML = html;
    const loading = container.querySelector('div#loading');
    // app
    const app = container.querySelector('div#app'),
        steps = json[1].icons,
        iconElems = document.querySelectorAll('div#icon-wrapper div.icon');

    function displaySlide(num) {
        const step = steps[num];
        document.querySelector('div#app div#icon-wrapper').style.display = 'none';
        document.querySelector('div#app div#slide-wrapper').style.display = 'grid';
        document.querySelector('div#app p#current-slide-info').innerHTML = step.html;
        if (step.title) document.querySelector('div#app h2#current-slide-title').innerText = step.title;
        else document.querySelector('div#app h2#current-slide-title').innerText = null;
        document.querySelector('div#app img#current-slide-icon').setAttribute('src', step.image);
        document.querySelector('div#app div#previous-slide').onclick = function () {
            num--;
            if (num < 0) num = steps.length - 1;
            displaySlide(num);
        }
        document.querySelector('div#app div#next-slide').onclick = function () {
            num++;
            if (num === steps.length) num = 0;
            displaySlide(num);
        }
    }
    document.querySelector('div#app div#main-menu-slide').onclick = function () {
        document.querySelector('div#app div#icon-wrapper').style.display = 'grid';
        document.querySelector('div#app div#slide-wrapper').style.display = 'none';
    };
    iconElems.forEach(iconElem => {
        iconElem.onclick = function () {
            if ('ga' in window) ga('send', 'event', 'Anxiety Interactive', 'Icon Clicked', parseInt(this.getAttribute('data-num')));
            displaySlide(parseInt(this.getAttribute('data-num')));
        }
    });
    // display
    loading.style.display = 'none';
    app.style.display = 'block';
})();