// Google Map Initialization
function initMap() {
    // Location of the company
    const location = { lat: 21.42679190411347, lng: 72.86067520483434}; // Example coordinates (India)

    // Create a map centered on the location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });

    // Add a marker to the map
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Asot Solar Technologies",
    });
}

// Optional: Animation for the Contact Form and Map on Scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.animated-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.classList.add('fadeUp');
        }
    });
});

let throttleTimeout;
window.addEventListener('scroll', function() {
    if (throttleTimeout) return;
    throttleTimeout = setTimeout(() => {
        const sections = document.querySelectorAll('.animated-section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                section.classList.add('fadeUp');
            }
        });
        throttleTimeout = null;
    }, 200);
});
