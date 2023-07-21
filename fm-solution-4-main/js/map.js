var map = L.map('map', {
	center: [41.48134126987655, -71.3103655846963],
	zoom: 16,
	zoomControl: false,
})

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map)
var myIcon = L.icon({
	iconUrl: './img/icon-location.svg',
	iconSize: [66, 88],
	iconAnchor: [33, 88],
})
var marker = L.marker([41.48134126987655, -71.3103655846963], { icon: myIcon }).addTo(map)
