export default function Icons(container, json) {
    var R = new Newsroom.rapid;
    R.a(container, R.c('h1', 'Loading...'));
    container.classList.add('inline');
    Newsroom.ajax(json).then(function (json) {
        function clear() {
            container.innerHTML = null;
        }
        function headers() {
            var header = R.c('h4', json.header);
            var subheader = R.c('span', json.subheader);
            clear();
            R.a(container, header);
            R.a(container, subheader);
        }
        function menu() {
            headers();
            var icons = json.sections;
            for (var x = 0, max = icons.length; x < max; x++) {
                var icon = R.c('img');
                icon.setAttribute('src', json.images.large + icons[x].icon);
                icon.setAttribute('data-section', x);
                icon.classList.add('icon');
                icon.onclick = function () {
                    section(this.getAttribute('data-section'));
                }
                R.a(container, icon);

            }
        }
        function section(num) {
            headers();
            var back = R.c('span', 'Back');
            back.classList.add('back');
            R.a(container, back);
            back.onclick = menu;
            num = parseInt(num);
            var image = R.c('img');
            image.setAttribute('src', json.images.large + json.sections[num].page);
            image.classList.add('page');
            image.onclick = menu;
            R.a(container, image);
        }
        // init
        menu();
    });
}