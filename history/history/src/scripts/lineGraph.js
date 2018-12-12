export default function LineGraph(container, json) {
    Newsroom.ajax(json).then(function (response) {

        // setup interactive
        var R = new Newsroom.rapid;
        container.classList.add('inline');

        // insert titles
        R.a(container, R.c('h2', response.title));
        R.a(container, R.c('span', response.description));

        // create graph
        var graph = R.c('div#graph');
        var min, max;
        R.e(response.lines, function (line) {
            var tempMin = R.min(line.values);
            var tempMax = R.max(line.values);
            if (tempMin < min || !min) min = tempMin;
            if (tempMax > max || !max) max = tempMax;
        });

        min = Math.floor(min);
        max = Math.ceil(max);
        var rows = (max - min) + 1;
        if (response.increment) rows = Math.round(rows / response.increment);
        R.e(rows, function (num) {
            var row = R.c('div.row');
            num = num * response.increment;
            R.a(row, R.c('div.value', num))
            row.setAttribute('id', 'row-' + num);
            var years = ((response.years.end - (response.years.start - 1)) / response.years.increment);
            R.e(years, function (year) {
                year = (response.years.start + (year * response.years.increment)) - 1;
                var column;
                if (num === min) column = R.c('div.year-label', '\'' + year.toString().slice(2, 4));
                else column = R.c('div.year');
                column.style.width = Math.floor(98 / years) + '%';
                R.a(row, column);
            });
            R.a(graph, row);
        })
        R.a(container, graph);

        // insert values into graph
        var lineNum = 0,
            keys = R.c('div.keys');
        R.e(response.lines, function (line) {
            var key = R.c('div.key', line.title);
            var color = R.c('div.color');
            if (line.color) color.style.backgroundColor = line.color;
            R.a(key, color);
            R.a(keys, key);
            var num = 0;
            R.e(line.values, function (value) {
                var dot = R.c('div.dot');
                dot.setAttribute('data-value', value);
                var row = (Math.floor((Math.floor(value) / response.increment)) * response.increment) + response.increment;
                var elem = document.getElementById('row-' + row).childNodes[num + 1];
                dot.style.marginLeft = (elem.offsetWidth - 6) + 'px';
                dot.style.marginTop = ((elem.offsetHeight * ((row - value) * 0.5)) - 2) + 'px';
                dot.setAttribute('id', 'line-' + lineNum + '-dot-' + num);
                if (line.color) dot.style.borderColor = line.color;
                R.a(elem, dot);
                if (num > 0) {
                    var getPositionAtCenter = function (element) {
                        var data = element.getBoundingClientRect();
                        return {
                            x: data.left + data.width / 2,
                            y: data.top + data.height / 2
                        };
                    };

                    var distance = function (a, b) {
                        var aPosition = getPositionAtCenter(a);
                        var bPosition = getPositionAtCenter(b);

                        return Math.sqrt(
                            Math.pow(aPosition.x - bPosition.x, 2) +
                            Math.pow(aPosition.y - bPosition.y, 2)
                        ) - 7;
                    };
                    var connector = R.c('div.line');
                    if (line.color) connector.style.borderColor = line.color;
                    R.a(dot, connector);
                    var elem1 = 'line-' + lineNum + '-dot-' + (num - 1),
                        elem2 = 'line-' + lineNum + '-dot-' + num;
                    elem1 = document.getElementById(elem1);
                    elem2 = document.getElementById(elem2);
                    var width = distance(elem1, elem2);
                    if (width > 40) width = width + 3;
                    connector.style.width = width + 'px';
                    var deg = Math.atan2(elem2.getBoundingClientRect().top - elem1.getBoundingClientRect().top, elem2.getBoundingClientRect().left - elem1.getBoundingClientRect().left) * 180 / Math.PI;
                    if (deg < 0) deg = deg - 3;
                    else deg = deg + 3;
                    connector.style.transform = 'rotate(' + deg + 'deg)';
                }
                dot.onmouseover = function () {
                    R.a(this, R.c('div.hud', this.getAttribute('data-value')));
                    if ('ga' in window) ga('send', 'event', 'Line Graph', window.location.pathname, this.getAttribute('data-value'));
                }
                dot.onclick = function () {
                    document.querySelector('div.hud').remove();
                    R.a(this, R.c('div.hud', this.getAttribute('data-value')));
                    if ('ga' in window) ga('send', 'event', 'Line Graph', window.location.pathname, this.getAttribute('data-value'));
                }
                dot.onmouseout = function () {
                    document.querySelector('div.hud').remove();
                }
                num++;
            });
            lineNum++;
        });
        R.a(container, keys);

        // footer
        R.a(container, R.c('span', response.footer));
    });
}