export default function Timeline(container, json, color, title, height) {
    Newsroom.ajax(json).then(function (XMLHttpResponse) {
        if (!XMLHttpResponse) {
            console.warn('Newsroom Interactives: Could not find that JSON');
        } else {
            json = XMLHttpResponse;
            container.style.height = height + 'px';
            var headerTitle = document.createElement('h1');
            headerTitle.innerText = title;
            headerTitle.classList.add('header-title');
            container.appendChild(headerTitle);

            function buildDate(selected, num) {
                var bubbleElems = container.querySelectorAll('div.dot');
                for (var x = 0; x < bubbleElems.length; x++) {
                    bubbleElems[x].style.backgroundColor = 'white';
                }
                container.querySelector('h2.timeline-date').innerText = selected.year;
                container.querySelector('div[data-num="' + num + '"]').style.backgroundColor = color;
                container.querySelector('span.timeline-description').innerText = selected.text;
                if (selected.image) {
                    container.querySelector('img.timeline-image').setAttribute('src', selected.image);
                    if (selected.full) {
                        container.querySelector('img.timeline-image').style.width = '100%';
                        container.querySelector('img.timeline-image').style.maxHeight = 'none';
                    } else {
                        container.querySelector('img.timeline-image').style.width = 'auto';
                        container.querySelector('img.timeline-image').style.maxHeight = '150px';
                    }
                    container.querySelector('img.timeline-image').style.display = 'block';
                    container.querySelector('span.image-caption').innerText = selected.caption;
                    container.querySelector('span.image-caption').style.display = 'block';
                } else {
                    container.querySelector('img.timeline-image').style.display = 'none';
                    container.querySelector('span.image-caption').style.display = 'none';
                }
            }
            var timelineContainer = document.createElement('div');
            timelineContainer.classList.add('timeline-container');
            var timelineGrid = document.createElement('div');
            timelineGrid.classList.add('timeline');
            var gridTemplateColumns = '';
            for (var x = 0; x < json.length; x++) {
                var time = json[x];
                gridTemplateColumns += '1fr ';
                var timelineSpot = document.createElement('div');
                timelineSpot.classList.add('timeline-spot');
                var dot = document.createElement('div');
                if (time.highlight) dot.classList.add('large');
                dot.classList.add('dot');
                dot.setAttribute('data-num', x);
                dot.onclick = function () {
                    var num = parseInt(this.getAttribute('data-num'));
                    var selected = json[num];
                    if ('ga' in window) ga('send', 'event', 'Timeline', title, selected.year);
                    buildDate(selected, num);
                    clearInterval(autoTimeline);
                }
                var line = document.createElement('div');
                line.classList.add('line');
                if (x === json.length - 1) line.style.width = '25%';
                if (color) {
                    dot.style.borderColor = color;
                    line.style.backgroundColor = color;
                }
                timelineSpot.appendChild(line);
                timelineSpot.appendChild(dot);
                timelineGrid.appendChild(timelineSpot);
            }
            timelineGrid.style.gridTemplateColumns = gridTemplateColumns;
            timelineContainer.appendChild(timelineGrid);
            var timelineDate = document.createElement('h2');
            timelineDate.classList.add('timeline-date');
            timelineContainer.appendChild(timelineDate);
            var timelineDescription = document.createElement('span');
            timelineDescription.classList.add('timeline-description');
            timelineDescription.innerText = 'loading...';
            timelineContainer.appendChild(timelineDescription);
            var timelineImage = document.createElement('img');
            timelineImage.classList.add('timeline-image');
            timelineImage.style.display = 'none';
            timelineContainer.appendChild(timelineImage);
            var imageCaption = document.createElement('span');
            imageCaption.classList.add('image-caption');
            imageCaption.style.display = 'none';
            timelineContainer.appendChild(imageCaption);
            container.appendChild(timelineContainer);
            buildDate(json[0], 0);
            var currentTime = 0;

            function elementInViewport2(el) {
                var top = el.offsetTop;
                var left = el.offsetLeft;
                var width = el.offsetWidth;
                var height = el.offsetHeight;

                while (el.offsetParent) {
                    el = el.offsetParent;
                    top += el.offsetTop;
                    left += el.offsetLeft;
                }

                return (
                    top < (window.pageYOffset + window.innerHeight) &&
                    left < (window.pageXOffset + window.innerWidth) &&
                    (top + height) > window.pageYOffset &&
                    (left + width) > window.pageXOffset
                );
            }
            var auto = false;
            var autoTimeline;

            function autoplay() {
                if (elementInViewport2(container) && !auto) {
                    auto = true;
                    autoTimeline = setInterval(function () {
                        if (currentTime === json.length - 1) currentTime = 0;
                        else currentTime++;
                        buildDate(json[currentTime], currentTime);
                    }, 2000);
                }
            }
            document.onscroll = autoplay;
            autoplay();
        }
    });
}