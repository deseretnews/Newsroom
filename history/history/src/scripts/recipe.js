export default function Recipe(container, json) {
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css?family=Handlee" rel="stylesheet">';
    document.head.innerHTML += '<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" rel="stylesheet">';
    var R = new Newsroom.rapid;
    R.a(container, R.c('span', 'Cooking up a recipe...'));
    container.classList.add('inline');
    Newsroom.ajax(json).then(function (recipe) {
        var title = R.c('span', recipe.title);
        title.classList.add('title');

        var app = {
            page: 'overview',
            clear: function () {
                container.innerHTML = null;
                R.a(container, title);
            },
            write: function (html) {
                var line = R.c('span', html);
                line.classList += 'line animated slideInLeft';
                R.a(container, line);
            },
            overview: function () {
                app.corner('ingredients');
                var time = (recipe.time >= 60 && (recipe.time % 60) === 0) ? ((recipe.time / 60) + ' hours') : (recipe.time + ' minutes');
                time = ((recipe.time / 60) === 1 && (recipe.time % 60) === 0) ? time.replace('s', '') : time;
                app.write('<span class="center">By ' + recipe.author + '</span>');
                app.write('<i>Serves ' + recipe.serves + ' and takes ' + time + '</i>');
            },
            ingredients: function () {
                app.corner(0);
                R.e(recipe.ingredients, function (ingredient) {
                    var html = (ingredient.amount) ? ('<span class="amount">' + ingredient.amount + '</span> of ' + ingredient.ingredient) : ingredient.ingredient;
                    app.write(html);
                });
            },
            corner() {
                var corner = R.c('div');
                corner.classList.add('corner');
                R.a(container, corner);
                corner.onclick = function () {
                    if (app.page === 'overview') app.page = 'ingredients';
                    else if (app.page === 'ingredients') app.page = 0;
                    else if (Number.isInteger(app.page) && app.page < (recipe.steps.length - 1)) app.page++;
                    else if (Number.isInteger(app.page) && app.page === (recipe.steps.length - 1)) app.page = 'overview';
                    else app.page = 'overview';
                    var elems = document.querySelectorAll('.line');
                    for (var x = 0, max = elems.length; x < max; x++) {
                        var elem = elems[x];
                        elem.classList.add('slideOutLeft');
                    }
                    setTimeout(app.render, 750);
                }
                app.write(null);
                var msg = R.c('span', 'Click the corner to continue or');
                msg.classList += 'line corner-msg animated slideInLeft';
                var back = R.c('span', '<span>click here</span> to go back...');
                back.classList += 'line back animated slideInLeft';
                back.onclick = function () {
                    if (app.page === 'overview') app.page = recipe.steps.length - 1;
                    else if (app.page === 'ingredients') app.page = 'overview';
                    else if (Number.isInteger(app.page) && app.page === 0) app.page = 'ingredients';
                    else if (Number.isInteger(app.page) < (recipe.steps.length - 1)) app.page--;
                    app.render();
                }
                R.a(container, msg);
                R.a(container, back);
            },
            step: function () {
                app.clear();
                var text = ('Step ' + (app.page + 1) + '/' + recipe.steps.length);
                if ((app.page + 1) < recipe.steps.length) app.corner((app.page + 1), text);
                else app.corner('overview', text);
                var step = recipe.steps[app.page];
                app.write('<b>Step ' + (app.page + 1) + '/' + recipe.steps.length + '</b> ');
                app.write(null);
                app.write(step);
            },
            render: function () {
                app.clear();
                if (Number.isInteger(app.page)) app.step();
                else app[app.page]();
            }
        }
        app.render();
    });
}