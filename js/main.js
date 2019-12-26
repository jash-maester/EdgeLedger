// Map
var mymap = L.map('map', {
    center: [23.841205, 91.285187],
    zoom: 13
});
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'sk.eyJ1IjoiamFzaG1hZXN0ZXIiLCJhIjoiY2s0bXV5b3QzMG92ZjNtbWlncGNvaDJmZyJ9.uTsP83Vu5ap6JST-YsjNxQ'
}).addTo(mymap);
var marker = L.marker([23.841205, 91.285187]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a showing Jash's Location.").openPopup();

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu Background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Map Token
// sk.eyJ1IjoiamFzaG1hZXN0ZXIiLCJhIjoiY2s0bXV5b3QzMG92ZjNtbWlncGNvaDJmZyJ9.uTsP83Vu5ap6JST-YsjNxQ
