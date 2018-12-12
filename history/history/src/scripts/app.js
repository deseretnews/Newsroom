// import new interactives here
import List from './list.js';
import Timeline from './timeline.js'
import Navigational from './navigational.js';
import Faqs from './faqs.js';
import Bullets from './bullets.js';
import Slideshow from './slideshow.js';
import Choropleth from './choropleth.js';
import LineGraph from './lineGraph.js';
import Profile from './profile.js';
import GuessingGame from './guessingGame.js';
import Firebase from '../libs/Firebase/firebase';
import QAndA from './qAndA.js';
import TextBox from './textBox.js';
import PhotoExplorer from './photoExplorer.js';
import Recipe from './recipe.js';
import Icons from './icons.js';
import Quizlet from './quizlet.js';

window.Newsroom = {
    parameter: function (interactive, parameter) {
        return interactive.getAttribute('data-' + parameter);
    },
    ajax: function (src) {
        return new Promise(function (res, rej) {
            var request = new XMLHttpRequest;
            request.onload = function () {
                if (this.status !== 404) res(JSON.parse(this.response));
                else rej();
            }
            request.open('get', src);
            request.send();
        })
    },
    init: function () {
        var interactives = document.getElementsByClassName('interactive');
        Firebase.initializeApp({
            apiKey: "AIzaSyDpJaDpX8MPIOTXJg_oKMY4-0e0AvizW8c",
            authDomain: "dn-interactives.firebaseapp.com",
            databaseURL: "https://dn-interactives.firebaseio.com",
            projectId: "dn-interactives",
            storageBucket: "",
            messagingSenderId: "403753384515"
        });
        for (var x = 0; x < interactives.length; x++) {
            var interactive = interactives[x],
                type = interactive.getAttribute('data-type');
            if (!type) console.warn('Newsroom Interactives: There was no type set for the interactive.');
            else if (type === 'list') new List(interactive, Newsroom.parameter(interactive, 'src'), Newsroom.parameter(interactive, 'style'));
            else if (type === 'timeline') new Timeline(interactive, Newsroom.parameter(interactive, 'src'), Newsroom.parameter(interactive, 'color'), Newsroom.parameter(interactive, 'title'), Newsroom.parameter(interactive, 'height'));
            else if (type === 'navigational') new Navigational(interactive, Newsroom.parameter(interactive, 'json'));
            else if (type === 'faqs') new Faqs(interactive, Newsroom.parameter(interactive, 'menuImage'), Newsroom.parameter(interactive, 'json'));
            else if (type === 'bullets') new Bullets(interactive, Newsroom.parameter(interactive, 'color'), Newsroom.parameter(interactive, 'title'), Newsroom.parameter(interactive, 'json'));
            else if (type === 'slideshow') new Slideshow(interactive, Newsroom.parameter(interactive, 'width'), Newsroom.parameter(interactive, 'title'), Newsroom.parameter(interactive, 'color'), Newsroom.parameter(interactive, 'json'));
            else if (type === 'choropleth') new Choropleth(interactive, Newsroom.parameter(interactive, 'usm'));
            else if (type === 'lineGraph') new LineGraph(interactive, Newsroom.parameter(interactive, 'json'));
            else if (type === 'profile') new Profile(interactive, Newsroom.parameter(interactive, 'color'), Newsroom.parameter(interactive, 'allLink'), Newsroom.parameter(interactive, 'allText'), Newsroom.parameter(interactive, 'json'));
            else if (type === 'guessingGame') new GuessingGame(interactive, Newsroom.parameter(interactive, 'json'));
            else if (type === 'qAndA') new QAndA(interactive, Newsroom.parameter(interactive, 'color'), Newsroom.parameter(interactive, 'height'), Newsroom.parameter(interactive, 'hoverBg'), Newsroom.parameter(interactive, 'title'), Newsroom.parameter(interactive, 'background'), Newsroom.parameter(interactive, 'json'));
            else if (type === 'textBox') new TextBox(interactive, Newsroom.parameter(interactive, 'header'), Newsroom.parameter(interactive, 'image'), Newsroom.parameter(interactive, 'json'), Newsroom.parameter(interactive, 'color'));
            else if (type === 'photoExplorer') new PhotoExplorer(interactive, Newsroom.parameter(interactive, 'json'));
            else if (type === 'recipe') new Recipe(interactive, Newsroom.parameter(interactive, 'json'));
			else if (type === 'icons') new Icons(interactive, Newsroom.parameter(interactive, 'json'));
			else if (type === 'quizlet') new Quizlet(interactive);
			else console.warn('Newsroom Interactives: There was no type set for the interactive.');
        }
    },
    rapid: function () {
        // append
        this.a = function (container, elem) {
            container.appendChild(elem);
        }
        // create 
        this.c = function (elems, text) {
            var elem = null;
            if (Array.isArray(elems)) {
                var container = document.createElement(elems[0]);
                for (var x = 1; x < elems.length; x++) {
                    var elem = document.createElement(elems[x]);
                    container.appendChild(elem);
                }
                return container;
            } else {
                var elem
                if (elems.includes('.')) {
                    var className = elems.substr(elems.indexOf('.') + 1),
                        elemName = elems.substr(0, elems.indexOf('.'));
                    elem = document.createElement(elemName);
                    elem.classList.add(className);
                } else if (elems.includes('#')) {
                    var id = elems.substr(elems.indexOf('#') + 1),
                        elemName = elems.substr(0, elems.indexOf('#'));
                    elem = document.createElement(elemName);
                    elem.setAttribute('id', id);
                } else {
                    elem = document.createElement(elems);
                }
                if (text) elem.innerHTML = text;
                return elem;
            }
        }
        // each
        this.e = function (array, callback) {
            var num;
            if (array.length) num = array.length;
            else num = array;
            for (var x = 0; x < num; x++) {
                var value;
                if (!array[x]) value = num - x;
                else value = array[x];
                callback(value);
            }
        }
        // prepend
        this.p = function (container, elem) {
            container.prepend(elem);
        }
        // min & max
        this.min = function (array) {
            return Math.min.apply(Math, array);
        }
        this.max = function (array) {
            return Math.max.apply(Math, array);
        }
    }
}