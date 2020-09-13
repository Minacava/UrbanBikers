var map = L.map('main_map').setView([37.77493, -122.41942], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution:
		'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);
// show a marker on the map
L.marker([37.77493, -122.4194]).bindPopup('Point One').addTo(map);
L.marker([37.77493, -122.4278]).bindPopup('Point Two').addTo(map);
