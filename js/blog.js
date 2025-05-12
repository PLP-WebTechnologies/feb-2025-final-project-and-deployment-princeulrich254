// Blog Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle (same as main.js)
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Blog Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const postCards = document.querySelectorAll('.post-card');

    if (filterButtons.length > 0 && postCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const selectedCategory = button.getAttribute('data-category');
                
                // Show/hide posts based on category
                postCards.forEach(card => {
                    if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Search Functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    if (searchInput && searchButton && postCards.length > 0) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });

        function performSearch() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            
            if (searchTerm === '') {
                postCards.forEach(card => card.style.display = 'block');
                return;
            }
            
            postCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const content = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            // Reset filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            filterButtons[0].classList.add('active'); // Set 'All' button as active
        }
    }

    // Load More Posts Button
    const loadMoreButton = document.getElementById('load-more');
    
    if (loadMoreButton) {
        // In a real application, this would load more posts from a server
        // For this demo, we'll simulate loading more posts
        loadMoreButton.addEventListener('click', function() {
            // Create new post elements
            const newPosts = [
                {
                    image: 'images/blog-7.jpg',
                    date: 'April 1, 2025',
                    title: 'Responsive Design Best Practices for 2025',
                    content: 'Learn about the latest best practices for creating truly responsive designs that work across all devices.',
                    link: 'posts/responsive-design.html',
                    category: 'css'
                },
                {
                    image: 'images/blog-8.jpg',
                    date: 'March 25, 2025',
                    title: 'Understanding Web Accessibility',
                    content: 'Why accessibility matters and how to make your websites more accessible to all users.',
                    link: 'posts/web-accessibility.html',
                    category: 'html'
                },
                {
                    image: 'images/blog-9.jpg',
                    date: 'March 18, 2025',
                    title: 'Optimizing Website Performance',
                    content: 'Tips and techniques for improving the loading speed and performance of your websites.',
                    link: 'posts/website-performance.html',
                    category: 'javascript'
                }
            ];

            const postsContainer = document.getElementById('blog-posts-container');
            
            // Add new posts to the container
            newPosts.forEach(post => {
                const article = document.createElement('article');
                article.className = 'post-card';
                article.setAttribute('data-category', post.category);
                
                article.innerHTML = `
                    <div class="post-image">
                        <img src="${post.image}" alt="${post.title}">
                    </div>
                    <div class="post-content">
                        <span class="post-date">${post.date}</span>
                        <h3>${post.title}</h3>
                        <p>${post.content}</p>
                        <a href="${post.link}" class="read-more">Read More</a>
                    </div>
                `;
                
                postsContainer.appendChild(article);
            });

            // Hide the load more button after clicking once (simulating end of posts)
            loadMoreButton.style.display = 'none';
        });
    }
});
