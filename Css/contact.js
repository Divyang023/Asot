// Google Map Initialization
function initMap() {
    // Location of the company
    const location = { lat: 21.42679190411347, lng: 72.86067520483434 }; // Example coordinates (India)

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

// Throttle function to limit how frequently the scroll event fires
function throttle(callback, delay) {
    let timeout;
    return function() {
        if (timeout) return;
        timeout = setTimeout(() => {
            callback();
            timeout = null;
        }, delay);
    };
}

// Function to handle the scroll event
function handleScroll() {
    const sections = document.querySelectorAll('.animated-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && !section.classList.contains('fadeUp')) {
            section.classList.add('fadeUp');
        }
    });
}

// Set up the throttled scroll handler
const throttledScroll = throttle(handleScroll, 200);

// Listen to the scroll event
window.addEventListener('scroll', throttledScroll);

// Optional: Initialize map when it's visible (for performance)
const mapElement = document.getElementById("map");
const mapObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            initMap(); // Initialize map only when it comes into view
            mapObserver.disconnect(); // Stop observing once the map is initialized
        }
    });
}, { threshold: 0.1 });

mapObserver.observe(mapElement);
