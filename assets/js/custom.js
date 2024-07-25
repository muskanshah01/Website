// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-text', {
        strings: ['Hey👋', 'Namaste 🙏', 'Nice to meet you!!'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});

// Smooth scrolling
$(document).ready(function() {
    $('a.scrolly').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
    });
});