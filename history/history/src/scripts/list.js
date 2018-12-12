export default function List(container, json, style) {
    Newsroom.ajax(json).then(function (XMLHttpResponse) {
        if (!XMLHttpResponse) {
            console.warn('Newsroom Interactives: Could not find that JSON');
        } else {
            json = XMLHttpResponse;
            for (var x = 0; x < json.length; x++) {
                var item = json[x],
                    list = item.list,
                    listElem = document.createElement('a'),
                    titleElem = document.createElement('h1'),
                    imgElem = document.createElement('div'),
                    subListElem = document.createElement('div');
                listElem.setAttribute('id', item.title.replace(/[^A-Za-z0-9]/g, ''));
                titleElem.innerText = item.title;
                if (item.color) {
                    titleElem.style.color = item.color;
                    titleElem.style.borderColor = item.color;
                }
                imgElem.style.backgroundImage = 'url(' + item.image + ')';
                imgElem.classList.add('item-image');
                if (item.float) {
                    var float = item.float;
                    imgElem.style.float = float;
                    if (float === 'right') imgElem.style.margin = '0px 0px 15px 15px';
                    else if (float === 'left') imgElem.style.margin = '0px 15px 15px 0px';
                }
                for (var y = 0; y < list.length; y++) {
                    var itemElem = document.createElement('p');
                    itemElem.innerText = list[y].category + ': ' + list[y].description;
                    subListElem.appendChild(itemElem);
                }
                listElem.appendChild(titleElem);
                listElem.appendChild(imgElem);
                listElem.appendChild(subListElem);
                container.appendChild(listElem);
            }
        }
    });
}