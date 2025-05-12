// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle (same as other pages)
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form field values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation
            if (!name || !email || !subject || !message) {
                showMessage('error', 'Please fill in all fields.');
                return;
            }

            if (!isValidEmail(email)) {
                showMessage('error', 'Please enter a valid email address.');
                return;
            }

            // Simulate form submission (in a real app, this would be an AJAX request to a server)
            // Show loading message
            showMessage('info', 'Sending your message...');

            // Simulate server delay
            setTimeout(() => {
                // Show success message
                showMessage('success', 'Your message has been sent successfully! We\'ll get back to you soon.');
                
                // Reset the form
                contactForm.reset();
            }, 1500);
        });
    }

    // Accordion functionality for FAQ section (same as main.js)
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Close all other accordion items
            accordionToggles.forEach(item => {
                if (item !== toggle) {
                    item.classList.remove('active');
                    const content = item.nextElementSibling;
                    content.style.maxHeight = null;
                }
            });

            // Toggle the clicked accordion item
            toggle.classList.toggle('active');
            const content = toggle.nextElementSibling;
            
            if (toggle.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Helper functions
    function showMessage(type, text) {
        formMessage.textContent = text;
        formMessage.style.display = 'block';
        
        // Remove all classes and add appropriate class
        formMessage.className = 'form-message';
        formMessage.classList.add(type);
        
        // If it's a success message, hide after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
