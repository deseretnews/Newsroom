require('./style.source.scss');

let html = require('./markup.source.html');
const json = require('./data.source.js');

export default (function() {
    // setup
    const UID = 'n0054706bb303c6d4';
    const selector = `div.newsroom[data-app="${UID}"]`;
    const container = document.querySelector(selector);
    if (json.inline) container.classList.add('inline');
    container.innerHTML = html;
    const loading = container.querySelector('div#loading');
    // app
    const app = container.querySelector('div#app');
    app.querySelector('h1#title').innerHTML = json.title;
    // display
    loading.style.display = 'none';
    app.style.display = 'block';
})();