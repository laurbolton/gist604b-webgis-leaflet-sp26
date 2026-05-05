// map.js
// Loads OSM data and displays city boundary, parks, cycleways, and bike stations using Leaflet

// ============================================
// Step 1: Initialize the map
// ============================================

// Create a Leaflet map in the "map" div
// setView([lat, lon], zoom)
const map = L.map('map').setView([42.3611, --71.0571], 12);



// ============================================
// Step 2: Add a basemap
// ============================================

// Tile layer provides the visual background
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// ============================================
// Step 3: Add/Customize controls
// ============================================

// Move zoom buttons
map.zoomControl.setPosition('topright');

// Add a scale bar
L.control.scale().addTo(map);


// ============================================
// Step 4: Create layer groups
// ============================================

// Layer groups allow toggling layers on/off
const lineLayer = L.layerGroup().addTo(map);
const pointLayer = L.layerGroup().addTo(map);
const polygonLayer = L.layerGroup().addTo(map);


// UI control to toggle layers
L.control.layers(null, {
  'Bike Stations': pointLayer,
  'Cycleways': lineLayer,
  'Parks': polygonLayer
}).addTo(map);



// ============================================
// Step 5: Load point data (Bike Stations)
// ============================================
fetch('data/blue_bike_stations.geojson')
  .then(res => res.json())
  .then(data => {L.geoJSON(data, {

      // Style points as circle markers
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 6,
          fillColor: '#b33892',
          color: '#ffffff',
          weight: 1,
          fillOpacity: 0.9
        });
      },

    }).addTo(pointLayer);

  })
  .catch(err => console.error('Error loading bike stations:', err));



// ============================================
// Step 6: Load line data (Cycleways)
// ============================================




// ============================================
// Step 7: Load polygon data (Boundary)
// ============================================

// // Add popups
//     onEachFeature: function(feature, layer) {
//         const name = feature.properties.name || 'Restaurant';
//         layer.bindPopup(`<strong>${name}</strong>`);
//     }