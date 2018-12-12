import {
    WSANOTINITIALISED
} from "constants";

export default function Navigational(container, json) {
    Newsroom.ajax(json).then(function (response) {
        json = response;
        var R = new Newsroom.rapid;
        var color = json.settings.color;
        var categories = json.categories;
        var states = [];
        var get = {
            states: function () {
                R.e(json.bullets, function (section) {
                    if (!states.includes(section.state)) states.push(section.state);
                });
                states = states.sort();
            }
        }
        var containers = {
            snap: function () {
                var elem = R.c('a', '▲');
                elem.classList.add('snap');
                elem.setAttribute('href', '#snap');
                if (color) elem.style.backgroundColor = color;
                var snap = R.c('a');
                snap.classList.add('snap-location');
                snap.setAttribute('id', 'snap');
                R.a(container, snap);
                R.a(container, elem);
            },
            icons: function () {
                var elem;
                if (!document.querySelector('div.icons')) elem = R.c('div');
                else elem = document.querySelector('div.icons');
                elem.innerHTML = null;
                elem.classList.add('icons');
                R.e(categories, function (category) {
                    if (category.title) {
                        var iconElem = R.c(['a', 'img', 'span']);
                        var anchor = category.title.toLowerCase();
                        anchor = anchor.replace(/\W/g, '');
                        anchor = '#' + anchor;
                        iconElem.setAttribute('href', anchor);
                        R.a(elem, iconElem);
                        iconElem.childNodes[0].setAttribute('src', category.image);
                        iconElem.childNodes[1].innerText = category.title;
                        iconElem.onclick = function () {
                            if ('ga' in window) ga('send', 'event', 'Navigational', 'Icon Clicked', this.getAttribute('href'));
                            var scroll = setTimeout(function () {
                                window.scrollBy(0, -75);
                                clearTimeout(scroll);
                            }, 1);
                        }
                        if (color) iconElem.childNodes[1].style.color = color;
                    }
                });
                container.append(elem);
            },
            dropdown: function () {
                get.states();
                var dropdown = R.c(['div', 'select']);
                dropdown.classList.add('custom-select');
                if (color) {
                    dropdown.style.borderColor = color;
                    dropdown.childNodes[0].style.color = color;
                }
                var defaultOption = R.c('option', 'Sort by State');
                defaultOption.setAttribute('selected', 'true');
                defaultOption.setAttribute('disabled', 'disabled');
                R.a(dropdown.childNodes[0], defaultOption);
                R.e(states, function (state) {
                    var option = R.c('option', state);
                    option.setAttribute('value', state);
                    R.a(dropdown.childNodes[0], option);
                });
                var viewAll = R.c('option', 'View All');
                viewAll.setAttribute('value', 'all');
                R.a(dropdown.childNodes[0], viewAll);
                dropdown.childNodes[0].onchange = function () {
                    var selected = this.value;
                    if ('ga' in window) ga('send', 'event', 'Navigational', 'Dropdown Selected', selected);
                    R.e(document.querySelectorAll('a.section ul li'), function (elem) {
                        elem.style.display = 'block';
                    });
                    R.e(document.querySelectorAll('a.section ul'), function (elem) {
                        elem.previousSibling.style.display = 'block';
                    });
                    R.e(document.querySelectorAll('a.section'), function (elem) {
                        elem.style.display = 'block';
                    });
                    if (selected !== 'all') {
                        R.e(document.querySelectorAll('a.section ul li'), function (elem) {
                            var state = elem.getAttribute('data-state');
                            if (state !== selected) elem.style.display = 'none';
                            else elem.style.display = 'block';
                        });
                        R.e(document.querySelectorAll('a.section ul'), function (elem) {
                            var children = false;
                            R.e(elem.childNodes, function (child) {
                                if (child.style.display === 'block') children = true;
                            });
                            if (!children) elem.previousSibling.style.display = 'none';
                            else elem.previousSibling.style.display = 'block';
                        });
                        R.e(document.querySelectorAll('a.section'), function (elem) {
                            var showSection = false;
                            R.e(elem.childNodes, function (label) {
                                if (label.tagName === 'SPAN') {
                                    if (label.style.display === 'block') showSection = true;
                                }
                            });
                            if (!showSection) elem.style.display = 'none';
                        });
                    }
                    var scrollDepth = this.parentNode.nextSibling.getBoundingClientRect().height;
                    scrollDepth = scrollDepth + this.parentNode.nextSibling.offsetTop;
                    scrollDepth = scrollDepth - 40;
                    window.scrollBy(0, scrollDepth);
                }
                R.a(container, dropdown);
            },
            description: function () {
                R.a(container, R.c('p', json.settings.description));
            },
            sections: function () {
                R.e(categories, function (category) {
                    if (category.title) {
                        var section = R.c(['a', 'img', 'h2', 'span']);
                        section.classList.add('section');
                        var anchor = category.title.toLowerCase();
                        anchor = anchor.replace(/\W/g, '');
                        section.setAttribute('id', anchor);
                        section.childNodes[0].setAttribute('src', category.image);
                        section.childNodes[1].innerText = category.title;
                        section.childNodes[2].innerHTML = category.description;
                        section.childNodes[2].classList.add('description');
                        if (color) section.childNodes[1].style.color = color;
                        var subs = {};
                        R.e(json.subcategories, function (sub) {
                            subs[sub.title] = [];
                        });
                        R.e(json.bullets, function (bullet) {
                            if (category.title === bullet.category) subs[bullet.subcategory].push(bullet);
                        });
                        R.e(json.subcategories, function (sub) {
                            if (subs[sub.title].length > 0) {
                                var listTitle = R.c('span');
                                listTitle.innerText = sub.title;
                                listTitle.classList.add('sub-title');
                                R.a(section, listTitle);
                                var subList = R.c('ul');
                                R.e(subs[sub.title], function (item) {
                                    var subElem = R.c('li', item.state + ': ' + item.description);
                                    subElem.style.backgroundImage = 'url(' + sub.image + ')';
                                    subElem.setAttribute('data-state', item.state);
                                    R.a(subList, subElem);
                                    for (var x = 0; x < item.bills.length; x++) {
                                        var bill = item.bills[x];
                                        var link = '<a href="' + item.links[x] + '" target="_blank">' + bill + '</a>';
                                        subElem.innerHTML = subElem.innerHTML.replace(bill, link);
                                    }
                                })
                                R.a(section, subList);
                            }
                        });
                        R.a(container, section);
                    } else {
                        var image = R.c('img');
                        image.setAttribute('src', category.image);
                        R.a(container, image);
                    }
                });
            },
            build: function () {
                containers.snap();
                containers.icons();
                containers.dropdown();
                containers.description();
                containers.sections();
            }
        }
        containers.build();
    });
}