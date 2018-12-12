export default function Faqs(container, menuImage, json) {
    var scenes = {
        loading: function () {
            var loadingImage = document.createElement('img');
            loadingImage.setAttribute('src', menuImage);
            loadingImage.classList.add('loading-image');
            container.appendChild(loadingImage);
            container.innerHTML += 'Loading...';
            Newsroom.ajax(json).then(function (XMLHttpResponse) {
                if (!XMLHttpResponse) {
                    console.warn('Newsroom Interactives: Could not find that JSON');
                } else {
                    json = XMLHttpResponse;
                    scenes.menu();
                }
            });
        },
        menu: function () {
            var topImage = document.createElement('img');
            topImage.setAttribute('src', menuImage);
            topImage.classList.add('top-image');
            scenes.empty();
            container.appendChild(topImage);
            for (var x = 0; x < json.length; x++) {
                var btn = document.createElement('div');
                btn.classList.add('btn');
                btn.innerText = json[x].button;
                btn.style.backgroundColor = json[x].color;
                btn.setAttribute('data-num', x);
                btn.onclick = function() {
                    var num = parseInt(this.getAttribute('data-num'));
                    if ('ga' in window) ga('send', 'event', 'FAQ', window.location.href, json[num].button);
                    scenes.info(num);
                }
                container.appendChild(btn);
            }
        },
        info: function(num) {
            scenes.empty();
            var obj = json[num];
            var topImage = document.createElement('img');
            if (obj.images.bottom) topImage.setAttribute('src', obj.images.top);
            else topImage.setAttribute('src', menuImage);
            topImage.classList.add('top-image');
            container.appendChild(topImage);
            var infoBox = document.createElement('div');
            infoBox.classList.add('info');
            var bottomImage = document.createElement('img');
            if (obj.images.bottom) {
                bottomImage.setAttribute('src', obj.images.bottom);
                infoBox.appendChild(bottomImage);
            }
            infoBox.innerHTML += obj.text;
            if (obj.color) infoBox.style.borderColor = obj.color;
            var closeElem = document.createElement('span');
            closeElem.innerText = 'X';
            closeElem.classList.add('close');
            closeElem.onclick = function() {
                scenes.menu();
            }
            infoBox.appendChild(closeElem);
            container.appendChild(infoBox);
        },
        empty: function() {
            container.innerHTML = null;
        }
    }
    scenes.loading();
}