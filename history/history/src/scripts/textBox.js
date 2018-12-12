export default function TextBox(container, header, image, json, color) {

    var R = new Newsroom.rapid;

    container.classList.add('inline');
    R.a(container, R.c('h1', 'Loading...'));
    container.style.backgroundColor = color;

    Newsroom.ajax(json).then(function (json) {
        container.innerHTML = '';
        var headerElem = R.c('h2', header);
        if (image) {
            var imageElem = R.c('img');
            imageElem.src = image;
            R.a(container, imageElem);
        } else {
            headerElem.style.width = '100%';
            headerElem.style.marginLeft = '0px';
        }
        R.a(container, headerElem);
        for (var x = 0; x < json.length; x++) {
            var section = json[x];
            if (section.bullet) R.a(container, R.c('b', section.bullet + ': '));
            R.a(container, R.c('span', section.text));
            container.innerHTML += '<br /><br />';
        }
    }).catch(function () {
        container.innerHTML = 'Failed to load...';
    });

}