export default function Profile(container, color, allLink, allText, json) {
    Newsroom.ajax(json).then(function (list) {

        var R = new Newsroom.rapid;

        function profile(num) {
            var profile = list[num],
                elem = R.c('div.profile'),
                top = R.c('div.info'),
                image = R.c('div.profile-image');
            image.style.backgroundImage = 'url(' + profile.image + ')';
            R.a(top, image);
            R.a(top, R.c('h2.profile-name', profile.name));
            if (profile.subtext) {
                var subtext = R.c('span', profile.subtext);
                subtext.style.display = 'block';
                subtext.style.fontSize = '.75em';
                subtext.style.color = color;
                subtext.style.fontWeight = 'bold';
                R.a(top, subtext)
            }
            R.a(elem, top);
            R.e(profile.bullets, function (bullet) {
                R.a(elem, R.c('div.bullet', '<b>' + bullet.bullet + ':</b> ' + bullet.text));
            });
            return elem;
        }

        if (list.length === 1) {
            container.classList.add('inline');
            container.style.gridTemplateColumns = '1fr';
            R.a(container, profile(0));
            container.style.paddingTop = '25px';
            var border = 'solid thick ';
            if (color) border += color;
            else border += 'grey';
            container.style.borderTop = border;
            container.style.borderBottom = border;
            if (allLink && allText) {
                var viewAll = R.c('div.bullet', allText + '<span class="arrow">&#x3e;</span>');
                viewAll.classList.add('view-all');
                viewAll.onclick = function () {
                    window.location = allLink;
                }
                R.a(document.querySelector('div.profile'), viewAll);
            }
            document.querySelector('div.profile').style.width = '100%';
        } else {
            var count = 0;
            R.e(list, function () {
                R.a(container, profile(count));
                count++;
            });
        }
    });
}