addGeoJson('geojson/tartu_city_celltowers_edu.geojson')

async function addGeoJson(url) {
    const response = await fetch(url)
    const data = await response.json()
    const heatData = data.features.map(heatDataConvert)
    const heatMap = L.heatLayer(heatData, {
        radius: 10
    })
    heatMap.addto(map)
    // console.log(heatData)
}

function heatDataConvert(feature) {
    return [
        feature.geometry.coordinate[1],
        feature.geometry.coordinate[0],
        feature.properities.area,
    ]
}
