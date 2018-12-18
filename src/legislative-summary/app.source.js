require('./style.source.scss');

let html = require('./markup.source.html');

export default (function () {
    const selector = `div.newsroom--legislative-summary`;
    const containers = document.querySelectorAll(selector);

    const toggleTab = function (event) {
        event.preventDefault();
        let year = event.target.dataset.year;
        // Change the active nav
        document.querySelectorAll('.legislative-summary--nav a').forEach(function (navItem) {
            navItem.classList.remove('active');
        });
        document.querySelector('.legislative-summary--nav a[data-year="' + year + '"]').classList.add('active');

        // Change the active item
        document.querySelectorAll('.legislative-summary--items >div').forEach(function (yearItems) {
            yearItems.classList.remove('active');
        });
        document.querySelector('.legislative-summary--items div[data-year="' + year + '"]').classList.add('active');
    };

    const showItemModal = function (event) {
        event.preventDefault();
        // a > div[data-year=""] > div.legislative-summary--items > div.newsroom--legislative-summary
        let interactive = event.target.parentNode.parentNode.parentNode;
        let modal = interactive.querySelector('.legislative-summary--modal');

        let rect = modal.getBoundingClientRect();

        let section = event.target.dataset.section;
        let sectionTitle = event.target.dataset.sectiontitle;
        let sectionItem = event.target.dataset.sectionitem;

        modal.innerHTML = window[interactive.dataset.datavar].sections[section].items[sectionTitle][sectionItem].description;
        modal.classList.add('active');
        // In case the modal wont be on the screen scroll the page up when an item is clicked
        let scrollDistance = rect.y;
        scrollDistance -= 50;
        window.scrollBy(0, scrollDistance);
    };

    const closeModal = function(event){
        event.preventDefault();
        event.target.classList.remove('active');
    };

    const setup = function (container, data) {
        container.innerHTML = html;
        container.querySelector('.legislative-summary--title').innerText = data['title'];
        container.querySelector('.legislative-summary--dek').innerText = data['dek'];
        container.querySelector('.legislative-summary--modal','::before').addEventListener('click', closeModal);

        for (let j = 0; j < data.sections.length; j++) {
            let dataSection = data.sections[j];
            // Setup the tab
            let yearTab = document.createElement('a');
            yearTab.setAttribute('href', "#");
            yearTab.setAttribute('data-year', dataSection.title);
            yearTab.innerText = dataSection.title;
            yearTab.addEventListener('click', toggleTab);
            if (j === 0) {
                yearTab.classList.add('active');
            }

            container.querySelector('.legislative-summary--nav').appendChild(yearTab);

            let yearSections = document.createElement('div');
            yearSections.setAttribute('data-year', dataSection.title);
            if (j === 0) {
                yearSections.classList.add('active');
            }

            // Setup the items
            for (let sectionTitle in dataSection.items) {
                if (!dataSection.items.hasOwnProperty(sectionTitle)) {
                    continue;
                }
                // Add the section label
                let sectionTitleEl = document.createElement('h3');
                sectionTitleEl.innerText = sectionTitle;
                yearSections.appendChild(sectionTitleEl);

                // Add all of the items
                for (let itemItt = 0; itemItt < dataSection.items[sectionTitle].length; itemItt++) {
                    let item = document.createElement('a');
                    item.setAttribute('href', '#');
                    item.setAttribute('data-section', j);
                    item.setAttribute('data-sectiontitle', sectionTitle);
                    item.setAttribute('data-sectionitem', itemItt);
                    item.classList.add('legislative-summary--item');
                    item.innerHTML = dataSection.items[sectionTitle][itemItt].title;
                    item.addEventListener('click', showItemModal);
                    yearSections.appendChild(item);
                }
            }
            container.querySelector('.legislative-summary--items').appendChild(yearSections);
        }
    };

    // Initialize any and all widgets
    for (let i = 0; i < containers.length; i++) {
        setup(containers[i], window[containers[i].dataset.datavar])
    }
})();