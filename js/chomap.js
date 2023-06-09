let map = L.map('map').setView([58.373523, 26.716045], 12)

const osm = 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'OpenStreetMap contributors', })

    osm.addTo(map)

async function addGeoJson(url) {
    const response = await fetch(url)
    const data = await response.json()

    L.choropleth(data, {
        valueProperty: 'TOWERS', // which property in the features to use
        scale: ['white', 'red'], // chroma.js scale - include as many as you like
        steps: 5, // number of breaks or steps in range
        mode: 'q', // q for quantile, e for equidistant, k for k-means
        style: {
            color: '#fff', // border color
            weight: 2,
            fillOpacity: 0.8
        },
        onEachFeature: function(feature, layer) {
            layer.bindPopup(feature.properties.NIMI + '<br>' + 'Tower number: ' + feature.properties.TOWERS)
        }
    }).addTo(map)   
}


addGeoJson('geojson/tartu_city_districts_edu.geojson')

function backDefault() {
    map.setView([58.373523, 26.716045], 12)
}