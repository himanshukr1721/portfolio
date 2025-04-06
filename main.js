// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const menuToggle = document.getElementById('menu-toggle');
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const revealElements = document.querySelectorAll('.reveal-element');
const parallaxElements = document.querySelectorAll('.parallax');
const projectCards = document.querySelectorAll('.project-card');
const blogGrid = document.getElementById('blog-grid');
const blogModal = document.getElementById('blog-modal');
const modalContent = document.getElementById('modal-content');
const modalBody = document.getElementById('modal-body');
const modalOverlay = document.getElementById('modal-overlay');
const closeModal = document.getElementById('close-modal');
const typewriterElements = document.querySelectorAll('.typewriter');

// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Tailwind CSS",
        excerpt: "Learn how to quickly set up and use Tailwind CSS in your next project.",
        date: "April 2, 2025",
        image: "/api/placeholder/600/400",
        category: "Web Development",
        content: `
            <h2 class="text-2xl font-bold mb-4">Getting Started with Tailwind CSS</h2>
            <div class="mb-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span>April 2, 2025</span>
                <span class="mx-2">•</span>
                <span>Web Development</span>
            </div>
            <img src="/api/placeholder/800/400" alt="Blog Image" class="w-full h-64 object-cover rounded-lg mb-6">
            <p class="mb-4">
                Tailwind CSS has revolutionized the way developers approach styling in web development. 
                Unlike traditional CSS frameworks that provide pre-designed components, Tailwind offers low-level utility classes 
                that let you build completely custom designs without leaving your HTML.
            </p>
            <h3 class="text-xl font-bold mb-2">Why Choose Tailwind?</h3>
            <p class="mb-4">
                There are several compelling reasons to adopt Tailwind CSS in your projects:
            </p>
            <ul class="list-disc pl-6 mb-4">
                <li class="mb-2">No more naming things - Tailwind provides utility classes that handle styling without requiring you to create custom CSS classes</li>
                <li class="mb-2">Responsive by default - Every utility class can be applied conditionally at different breakpoints</li>
                <li class="mb-2">Component-driven - Create reusable components by combining utility classes</li>
                <li class="mb-2">Customizable - Tailor the framework to your design system through the configuration file</li>
            </ul>
            <h3 class="text-xl font-bold mb-2">Getting Started</h3>
            <p class="mb-4">
                To get started with Tailwind CSS, you'll need to install it via npm and create a configuration file:
            </p>
            <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
npm install tailwindcss
npx tailwindcss init
            </pre>
            <p class="mb-4">
                Next, you'll need to configure your template paths in the tailwind.config.js file:
            </p>
            <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
            </pre>
            <p class="mb-4">
                Finally, add the Tailwind directives to your CSS file:
            </p>
            <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
@tailwind base;
@tailwind components;
@tailwind utilities;
            </pre>
            <p>
                With these steps completed, you're ready to start using Tailwind in your HTML. For more advanced usage and 
                customization options, be sure to check out the <a href="#" class="text-indigo-600 dark:text-indigo-400 hover:underline">official documentation</a>.
            </p>
        `
    },
    {
        id: 2,
        title: "Creating Stunning Animations with CSS",
        excerpt: "Discover how to add life to your websites with CSS animations and transitions.",
        date: "March 25, 2025",
        image: "/api/placeholder/600/400",
        category: "CSS",
        content: `
            <h2 class="text-2xl font-bold mb-4">Creating Stunning Animations with CSS</h2>
            <div class="mb-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span>March 25, 2025</span>
                <span class="mx-2">•</span>
                <span>CSS</span>
            </div>
            <img src="/api/placeholder/800/400" alt="Blog Image" class="w-full h-64 object-cover rounded-lg mb-6">
            <p class="mb-4">
                Animation adds life to websites, improves user experience, and draws attention to important elements.
                With modern CSS, you can create impressive animations without relying on JavaScript or external libraries.
            </p>
            <h3 class="text-xl font-bold mb-2">CSS Transitions</h3>
            <p class="mb-4">
                Transitions allow you to change property values smoothly over a specified duration. They're perfect for 
                hover effects, form interactions, and simple state changes.
            </p>
            <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: darkblue;
}
            </pre>
            <h3 class="text-xl font-bold mb-2">CSS Animations</h3>
            <p class="mb-4">
                For more complex animations, you can use CSS animations with keyframes. This allows you to create 
                multi-step animations with complete control over each step.
            </p>
            <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.bouncing-element {
  animation: bounce 1s ease infinite;
}
            </pre>
            <h3 class="text-xl font-bold mb-2">Performance Considerations</h3>
            <p class="mb-4">
                When creating animations, it's important to consider performance. Stick to animating only the 
                transform and opacity properties when possible, as these don't trigger layout reflows.
            </p>
            <p>
                By mastering CSS animations and transitions, you can add professional polish to your websites
                and create engaging user experiences that stand out.
            </p>
        `
    },
    {
        id: 3,
        title: "JavaScript Tips and Tricks",
        excerpt: "Improve your JavaScript skills with these essential tips and tricks.",
        date: "March 15, 2025",
        image: "/api/placeholder/600/400",
        category: "JavaScript",
        content: `
            <h2 class="text-2xl font-bold mb-4">JavaScript Tips and Tricks</h2>
            <div class="mb-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span>March 15, 2025</span>
                <span class="mx-2">•</span>
                <span>JavaScript</span>
            </div>
            <img src="/api/placeholder/800/400" alt="Blog Image" class="w-full h-64 object-cover rounded-lg mb-6">
            <p class="mb-4">
                JavaScript continues to be one of the most widely used programming languages in web development.
                These tips and tricks will help you write cleaner, more efficient code.
            </p>
            <h3 class="text-xl font-bold mb-2">Use Modern Array Methods</h3>
            <p class="mb-4">
                Modern array methods like map, filter, and reduce can make your code more readable and maintainable.
            </p>
            <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
// Instead of traditional loops
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

// Use map
const doubled = numbers.map(num => num * 2);
            </pre>
            <h3 class="text-xl font-bold mb-2">Destructuring Assignment</h3>
            <p class="mb-4">
                Destructuring makes it easier to extract values from objects and arrays.
            </p>
            <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
// Instead of
const name = user.name;
const age = user.age;

// Use destructuring
const { name, age } = user;

// Works with arrays too
const [first, second] = items;
            </pre>
            <h3 class="text-xl font-bold mb-2">Async/Await for Promises</h3>
            <p class="mb-4">
                Async/await syntax makes asynchronous code easier to read and reason about.
            </p>
            <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
// Instead of promise chains
fetchData()
  .then(data => processData(data))
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Use async/await
async function getData() {
  try {
    const data = await fetchData();
    const result = await processData(data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
            </pre>
            <p>
                By incorporating these modern JavaScript techniques into your development workflow, you'll write
                more concise, readable, and maintainable code.
            </p>
        `
    }
];

// Theme Toggle Functionality
function initThemeToggle() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', darkMode);
    
    function toggleDarkMode() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', isDark);
    }
    
    themeToggle.addEventListener('click', toggleDarkMode);
    mobileThemeToggle.addEventListener('click', toggleDarkMode);
}

// Mobile Menu Toggle
function initMobileMenu() {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuToggle.innerHTML = mobileMenu.classList.contains('hidden') 
            ? '<i class="fas fa-bars"></i>' 
            : '<i class="fas fa-times"></i>';
    });
    
    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    function checkScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll();
}

// Active Link Highlighting
function initActiveLinks() {
    function setActiveLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
}

// Reveal on Scroll Animation
function initRevealAnimation() {
    const options = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.dataset.delay || 0;
                
                setTimeout(() => {
                    element.classList.add('revealed');
                }, delay);
                
                observer.unobserve(element);
            }
        });
    }, options);
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Parallax Effect
function initParallax() {
    window.addEventListener('mousemove', e => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 1;
            const x = mouseX * 20 * speed;
            const y = mouseY * 20 * speed;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Typewriter Effect
function initTypewriter() {
    typewriterElements.forEach(element => {
        const words = element.dataset.words.split(',');
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let text = '';
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                text = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                text = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            element.textContent = text;
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 1000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }
            
            setTimeout(type, typeSpeed);
        }
        
        type();
    });
}

// Blog Posts
function initBlog() {
    // Populate blog grid
    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 reveal-element';
        blogCard.dataset.delay = 200 + Math.random() * 300;
        blogCard.dataset.postId = post.id;
        
        blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <div class="text-sm text-indigo-600 dark:text-indigo-400 mb-2">${post.category}</div>
                <h3 class="text-xl font-bold mb-2">${post.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">${post.excerpt}</p>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500 dark:text-gray-500">${post.date}</span>
                    <button class="text-indigo-600 dark:text-indigo-400 hover:underline">Read More</button>
                </div>
            </div>
        `;
        
        blogGrid.appendChild(blogCard);
        
        // Add click event to blog card
        blogCard.addEventListener('click', () => {
            const postId = parseInt(blogCard.dataset.postId);
            const post = blogPosts.find(p => p.id === postId);
            
            if (post) {
                modalBody.innerHTML = post.content;
                blogModal.classList.remove('hidden');
                setTimeout(() => {
                    blogModal.classList.add('modal-active');
                }, 10);
            }
        });
    });
    
    // Modal close functionality
    function closeModalFn() {
        blogModal.classList.remove('modal-active');
        setTimeout(() => {
            blogModal.classList.add('hidden');
        }, 300);
    }
    
    closeModal.addEventListener('click', closeModalFn);
    modalOverlay.addEventListener('click', closeModalFn);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
    initNavbarScroll();
    initActiveLinks();
    initRevealAnimation();
    initParallax();
    initTypewriter();
    initBlog();
});