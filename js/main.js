// Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    const subscriptionMessage = document.getElementById('subscription-message');

    if (newsletterForm && subscriptionMessage) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();

            if (!email || !isValidEmail(email)) {
                subscriptionMessage.textContent = 'Please enter a valid email address.';
                subscriptionMessage.style.display = 'block';
                subscriptionMessage.className = 'form-message error';
                return;
            }

            // Simulating form submission
            subscriptionMessage.textContent = 'Thank you for subscribing to our newsletter!';
            subscriptionMessage.style.display = 'block';
            subscriptionMessage.className = 'form-message success';

            // Reset the form
            newsletterForm.reset();

            // Hide the message after 5 seconds
            setTimeout(() => {
                subscriptionMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Accordion functionality for FAQ section
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Close all other accordion items
            accordionToggles.forEach(item => {
                if (item !== toggle) {
                    item.classList.remove('active');
                }
            });

            // Toggle the clicked accordion item
            toggle.classList.toggle('active');
        });
    });
});

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
