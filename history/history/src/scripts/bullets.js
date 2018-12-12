export default function Bullets(container, color, title, json) {
    Newsroom.ajax(json).then(function(response) {
        var R = new Newsroom.rapid;
        json = response;
        var titleElem = R.c('h1', title);
        R.a(container, titleElem);
        for (var x = 0; x < json.length; x++) {
            var section = json[x];
            var bannerElem = R.c('div', section.banner);
            bannerElem.style.backgroundColor = color;
            R.a(container, bannerElem);
            var listElem = R.c('ul');
            R.a(container, listElem);
            for (var y = 0; y < section.bullets.length; y++) {
                var bullet = section.bullets[y];
                var itemElem = R.c('li', bullet);
                R.a(listElem, itemElem);
            }
        }
    });
}