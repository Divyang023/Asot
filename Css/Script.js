// Change Navbar Color on Scroll
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.classList.add('navbar-scrolled'); // Add class to change background color when scrolling
    } else {
        navbar.classList.remove('navbar-scrolled'); // Remove class when at the top
    }
};

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action of jumping to the section

        // Get the target section's ID
        const targetId = this.getAttribute('href').slice(1);

        // Scroll to the target section smoothly
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation for Navbar Links on Hover (Optional)
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    link.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Mobile Navbar Toggle Animation
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', function() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('show');
});
