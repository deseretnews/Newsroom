require('./style.source.scss');

import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

let html = require('./markup.source.html');
const json = require('./data.source.js');

export default (function () {
    // setup
    const UID = 'n771e88013088c329';
    const selector = `div.newsroom[data-app="${UID}"]`;
    const container = document.querySelector(selector);
    if (json.inline) container.classList.add('inline');
    container.innerHTML = html;
    const loading = container.querySelector('div#loading');
    // app
    let markers = [];
    for (var x = 0; x < 100; x++) {
        markers.push({
            lat: (Math.floor(Math.random() * 90) + 1) * ((Math.random() < .5) ? 1 : -1),
            lng: (Math.floor(Math.random() * 180)) * ((Math.random() < .5) ? 1 : -1)
        });
    }
    const client = new ApolloClient({
        uri: 'http://127.0.0.1:8080/api/graphql'
    }).query({
        query: gql `query getAllTemples {
            temples {
                edges {
                node {
                    name
                    description
                    location {
                    mapLat
                    mapLng
                    }
                }
                }
            }
            }`
    })
    .then(temples => {
        temples = temples.data.temples.edges;
        temples.map(temple => {
            temple = temple.node;
            if (
                temple.location &&
                temple.location.lat &&
                temple.location.long &&
                typeof temple.location.lat === 'number' &&
                typeof temple.location.long === 'number'
            ) {
                markers.push({
                    lat: temple.location.lat,
                    lng: temple.location.long
                });
            }
        });
        let mapElem = document.createElement('script');
        mapElem.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAhSRAntTKOe2MonjmH_bSn10pirZ3F8qA&callback=initMap');
        container.appendChild(mapElem);
    });
    window.initMap = function () {
        const map = new google.maps.Map(
            document.getElementById('map'), 
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: -30
                }
            }
        );
        markers.map((position, i) => {
            setTimeout(() => {
                var image = {
                    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                    size: new google.maps.Size(20, 32),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(0, 32)
                  }
                new google.maps.Marker({
                    position: position,
                    map: map,
                    icon: image
                });
              }, i * 50);
        });
    }
    // display
    loading.style.display = 'none';
    app.style.display = 'block';
})();