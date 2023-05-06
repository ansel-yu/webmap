let map = L.map('map').setView([58.373523, 26.716045], 12)

const osm = 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'OpenStreetMap contributors', })

    osm.addTo(map)

// async function addGeoJson(url) {
//     const response = await fetch(url)
//     const data = await response.json()
//     L.choropleth(data, {
//         valueProperty: 'OBJECTID', // which property in the features to use
//         scale: ['white', 'red'], // chroma.js scale - include as many as you like
//         steps: 5, // number of breaks or steps in range
//         mode: 'q', // q for quantile, e for equidistant, k for k-means
//         style: {
//             color: '#fff', // border color
//             weight: 2,
//             fillOpacity: 0.8
//         },
//         onEachFeature: function(feature, layer) {
//             layer.bindPopup(feature.properties.OBJECTID)
//         }
//     }).addTo(map)
    
    
// }


// addGeoJson('geojson/tartu_city_celltowers_edu.geojson')


$.getJSON('geojson/tartu_city_celltowers_edu.geojson', function (geojson) {
    L.choropleth(geojson, {
      valueProperty: 'OBJECTID',
      scale: ['white', 'red'],
      steps: 5,
      mode: 'q',
      style: {
        color: '#fff',
        weight: 2,
        fillOpacity: 0.8
      },
      onEachFeature: function (feature, layer) {
        layer.bindPopup('District ' + feature.properties.dist_num + '<br>' +
            feature.properties.incidents.toLocaleString() + ' incidents')
      }
    }).addTo(map)
  })
  