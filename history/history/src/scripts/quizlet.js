export default function Quizlet(container) {
    var R = new Newsroom.rapid;
    R.a(container, R.c('h2', 'Loading...'));
    container.classList.add('inline');

    var app = {
        question: 0,
        answer: null,
        dev: false
    }

    var json = {
        "title": "How important are the following things to your personal identity?",
        "categories": [{
            "title": "Race",
            "subcategories": ["white", "black", "hispanic"]
        }, {
            "title": "Gender",
            "subcategories": ["women", "men"]
        }, {
            "title": "Political Affiliation",
            "subcategories": ["republican", "democrat", "independent"]
        }],
        "questions": [{
            "text": "My role as a spouse or partner",
            "results": {
                "all": 0.69,
                "white": 0.68,
                "black": 0.73,
                "hispanic": 0.7,
                "men": 0.73,
                "women": 0.67,
                "republican": 0.78,
                "democrat": 0.64,
                "independent": 0.62
            }
        }, {
            "text": "My religion",
            "results": {
                "all": 0.43,
                "white": 0.39,
                "black": 0.64,
                "hispanic": 0.44,
                "men": 0.4,
                "women": 0.45,
                "republican": 0.58,
                "democrat": 0.33,
                "independent": 0.38
            }
        }, {
            "text": "My race",
            "results": {
                "all": 0.29,
                "white": 0.19,
                "black": 0.73,
                "hispanic": 0.41,
                "men": 0.29,
                "women": 0.3,
                "republican": 0.28,
                "democrat": 0.32,
                "independent": 0.26
            }
        }, {
            "text": "My political party",
            "results": {
                "all": 0.28,
                "white": 0.28,
                "black": 0.35,
                "hispanic": 0.28,
                "men": 0.29,
                "women": 0.27,
                "republican": 0.36,
                "democrat": 0.32,
                "independent": 0.09
            }
        }, {
            "text": "My career or job",
            "results": {
                "all": 0.37,
                "white": 0.33,
                "black": 0.46,
                "hispanic": 0.42,
                "men": 0.38,
                "women": 0.36,
                "republican": 0.39,
                "democrat": 0.39,
                "independent": 0.29
            }
        }, {
            "text": "My community",
            "results": {
                "all": 0.3,
                "white": 0.26,
                "black": 0.44,
                "hispanic": 0.31,
                "men": 0.28,
                "women": 0.31,
                "republican": 0.32,
                "democrat": 0.3,
                "independent": 0.25
            }
        }],
        "responses": [{
            "text": "Not at all important",
            "valid": false
        }, {
            "text": "Not too important",
            "valid": false
        }, {
            "text": "Somewhat important",
            "valid": false
        }, {
            "text": "Very important",
            "valid": true
        }, {
            "text": "Extremely important",
            "valid": true
        }]
    }

    function select(selected) {
        var elems = document.getElementsByClassName('question-bubble');
        for (var x = 0, max = elems.length; x < max; x++) {
            var elem = elems[x];
            elem.classList.remove('selected');
        }
        selected.childNodes[0].classList.add('selected');
        app.answer = parseInt(selected.getAttribute('data-num'));
    }

    function ask() {
        var titleElem = R.c('h1.question-title', json.title),
            borderElem1 = R.c('hr.question-border'),
            borderElem2 = R.c('hr.question-border-small'),
            questionElem = R.c('h1.question-sub', json.questions[app.question].text),
            submitElem = R.c('h1.question-submit', 'submit');
        // clear
        container.innerHTML = null;
        // build
        R.a(container, titleElem);
        R.a(container, borderElem1);
        R.a(container, borderElem2);
        R.a(container, questionElem);
        // answers
        for (var x = 0, max = json.responses.length; x < max; x++) {
            var wrapper = R.c('div.question-wrapper'),
                bubble = R.c('div.question-bubble'),
                response = R.c('span.question-response', json.responses[x].text);
            // wrapper
            wrapper.setAttribute('data-num', x);
            wrapper.onclick = function () {
                select(this);
            }
            R.a(wrapper, bubble);
            R.a(wrapper, response);
            R.a(container, wrapper);
            // spacers
            var spacer = R.c('div.spacer');
            if ((x + 1) < json.responses.length) R.a(container, spacer);
        };
        // submit
        submitElem.onclick = function () {
            if (app.answer || app.answer === 0) answer();
        }
        R.a(container, submitElem);
    }

    function answer() {
        // clear
        container.innerHTML = null;
        // header
        var headerText = 'You said that ';
        headerText += json.questions[app.question].text.toLowerCase().replace('my', 'your');
        headerText += ' was <span>"';
        headerText += json.responses[app.answer].text.toLowerCase();
        headerText += '"</span> to your personal identity.';
        var header = R.c('h1.answer-header', headerText);
        R.a(container, header);
        // breakdown
        var breakdownText = 'Here\'s how you compare:<br />';
        breakdownText += '<span>These are the percentage of Americans who selected "extremely" or "very important."'
        var breakdown = R.c('h1.answer-breakdown', breakdownText);
        R.a(container, breakdown);
        // percentage
        var percent = json.questions[app.question].results.all;
        percent = Math.round(percent * 100) + '% <span>of Americans overall</span>';
        var percentage = R.c('h1.answer-percent', percent);
        R.a(container, percentage);
        // categories
        var categories = R.c('div.answer-categories');
        R.e(json.categories, function (category) {
            var title = R.c('h1.answer-category-title', category.title);
            R.a(categories, title);
            var wrapper = R.c('div.answer-sub-wrapper');
            R.e(category.subcategories, function (sub) {
                console.log();
                var subPercent = json.questions[app.question].results[sub];
                subPercent = Math.round(subPercent * 100) + '%';
                var title = R.c('h1', sub + '<span id="percent">' + subPercent + '</span>');
                R.a(wrapper, title);
            });
            R.a(categories, wrapper);
        });
        R.a(container, categories);
        // next btn 
        app.question++;
        if (app.question < json.questions.length) {
            var nextBtn = R.c('h1.answer-btn', 'next question <span>▶</span>');
            nextBtn.onclick = ask;
            R.a(container, nextBtn);
            app.answer = null;
            app.question++;
        }
    }

    if (app.dev) {
        app.answer = 2;
        answer();
    } else {
        ask(json.questions[app.question]);
    }
}