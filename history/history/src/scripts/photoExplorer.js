import imageMapResize from '../libs/Image-Map-Resizer/imageMapResizer.min';

export default function PhotoExplorer(container, json) {
    container.innerHTML = '<h1>Loading...</h1>';
    // get json from location
    Newsroom.ajax(json).then(function (data) {
        container.innerHTML = null;
        // import "rapid" from newroom to write less code
        var R = new Newsroom.rapid;
        // create/append image & set map id
        var image = R.c('img');
        image.setAttribute('src', data.photo);
        image.setAttribute('usemap', '#image-map');
        R.a(container, image);
        // append map & resize it
        container.innerHTML += data.hotspots.map;
        imageMapResize();
        // create span to append info when hotspot is clicked
        var info = R.c('span');
        info.innerHTML = data.intro;
        info.style.fontSize = '0.75em';
        R.a(container, info);
        // set event listeners for all the hotspots
        var map = document.querySelectorAll('map[name="image-map"] area');
        R.e(map, function (elem) {
            elem.onclick = function () {
                // get number from a data attribute
                var num = elem.getAttribute('data-hotspot');
                num = parseInt(num) - 1;
                // append info from json
                info.innerHTML = '<b>' + (num + 1) + '.</b> ' + data.hotspots.info[num];
                // log event in google analytics 
                if ('ga' in window) {
                    ga('send', 'event', 'Photo Explorer (Hotspot Clicked)', window.location.href, (num + 1));
                }
            }
        });
    });
}