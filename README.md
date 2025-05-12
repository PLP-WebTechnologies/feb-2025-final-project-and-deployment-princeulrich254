# Tech Blog - Responsive Blog Website

A fully functional responsive blog website built with HTML, CSS, and JavaScript.

## Project Overview

This project is a multi-page blog website that demonstrates modern web development techniques including:

- Responsive design for all device sizes
- Interactive components using vanilla JavaScript
- Semantic HTML5 elements
- CSS Grid and Flexbox layouts
- Form handling and validation

## Pages

1. **Home Page** (`index.html`) - Main landing page with featured posts and newsletter subscription
2. **Blog Page** (`blog.html`) - Archive of all blog posts with filtering and search functionality
3. **About Page** (`about.html`) - Information about the blog and team members
4. **Contact Page** (`contact.html`) - Contact form and additional information
5. **Individual Blog Post** (`posts/javascript-frameworks.html`) - Sample blog post template

## Features

- Mobile-responsive navigation menu
- Newsletter subscription form
- Blog post filtering by category
- Search functionality
- Interactive accordion for FAQs
- Contact form with validation
- "Load more posts" pagination
- Responsive grid layouts

## Project Structure

```
blog/
│
├── index.html               # Home page
├── blog.html                # Blog archive page
├── about.html               # About page
├── contact.html             # Contact page
├── README.md                # Project documentation
│
├── css/
│   └── style.css            # Main stylesheet
│
├── js/
│   ├── main.js              # Main JavaScript file
│   ├── blog.js              # Blog page functionality
│   └── contact.js           # Contact form handling
│
├── images/
│   └── placeholder.txt      # Placeholder for image files
│
└── posts/
    └── javascript-frameworks.html  # Sample blog post
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome (for icons)

## Deployment Options

### 1. GitHub Pages

1. Create a GitHub repository for your blog
2. Push your code to the repository
3. Go to the repository settings
4. Scroll down to the GitHub Pages section
5. Select the branch you want to deploy (usually `main` or `master`)
6. Your site will be published at `https://yourusername.github.io/repository-name/`

### 2. Netlify

1. Sign up for a free Netlify account at [netlify.com](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub/GitLab/Bitbucket account
4. Select your blog repository
5. Configure build settings (not needed for this project as it's static HTML)
6. Click "Deploy site"
7. Your site will be published with a Netlify subdomain (e.g., `your-site-name.netlify.app`)
8. You can configure a custom domain in the site settings if desired

### 3. Vercel

1. Sign up for a free Vercel account at [vercel.com](https://vercel.com/)
2. Click "New Project"
3. Import your repository from GitHub/GitLab/Bitbucket
4. Configure project settings (not needed for this project as it's static HTML)
5. Click "Deploy"
6. Your site will be published with a Vercel subdomain (e.g., `your-site-name.vercel.app`)
7. You can configure a custom domain in the project settings if desired

## Future Enhancements

- Add a dark mode toggle
- Implement a comment system
- Create a CMS integration for managing blog posts
- Add social sharing functionality
- Implement analytics tracking

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

[Your Name]

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for placeholder images
