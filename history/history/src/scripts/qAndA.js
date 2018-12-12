export default function QAndA(container, color, height, hoverBg, title, background, json) {
    var R = new Newsroom.rapid;
    R.a(container, R.c('h1', 'Loading...'));
    container.classList.add('inline');
    if (color) container.style.color = color;
    Newsroom.ajax(json).then(function (sections) {
        function questions() {
            container.innerHTML = null;
            if (height) container.style.height = height + 'px';
            R.a(container, R.c('h2', title));
            container.style.backgroundImage = 'url(' + background + ')';
            var btnNum = 0;
            R.e(sections, function (section) {
                var btn = R.c('div.button'),
                    image = R.c('img');
                btn.setAttribute('data-num', btnNum);
                btnNum++;
                btn.onclick = function () {
                    var num = parseInt(this.getAttribute('data-num'));
                    container.innerHTML = null;
                    var background = R.c('img');
                    background.src = hoverBg;
                    background.classList.add('answer-background');
                    R.a(container, background);
                    var close = R.c('div');
                    close.classList.add('close');
                    close.onclick = function() {
                        questions();
                    }
                    R.a(container, close);
                    var header = R.c('h4', section.header);
                    R.a(container, header);
                    var html = R.c('span', section.html);
                    html.style.top = (55 + header.offsetHeight) + 'px';
                    html.classList.add('html');
                    R.a(container, html);
                    answer(sections[num])
                }
                btn.onmouseover = function () {
                    this.children[1].src = section.hover;
                }
                btn.onmouseout = function () {
                    this.children[1].src = section.image;
                }
                R.a(btn, R.c('span', section.text));
                image.src = section.image;
                image.classList.add('wow');
                image.classList.add('slideInLeft');
                R.a(btn, image)
                R.a(container, btn);
            });
        }
        function answer(section) {
            console.log(section)
        }
        questions();
    }).catch(function () {
        container.innerHTML = null;
        R.a(container, R.c('h1', 'Loading...'));
    });
}