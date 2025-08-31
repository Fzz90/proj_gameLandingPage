// Dark mode functionality
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const navbar = document.getElementById('navbar');
    const navbarTitle = navbar.querySelector('h1');
    let lastScrollY = window.scrollY;
    
    // Check for saved theme preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    // Handle navbar appearance on scroll
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar.classList.add('bg-white/80', 'dark:bg-gray-900/80', 'backdrop-blur-sm');
            navbar.classList.remove('bg-transparent');
            navbarTitle.classList.remove('opacity-0');
            navbarTitle.classList.add('text-gray-900', 'dark:text-white');
            navbarTitle.classList.remove('text-white');
        } else {
            navbar.classList.remove('bg-white/80', 'dark:bg-gray-900/80', 'backdrop-blur-sm');
            navbar.classList.add('bg-transparent');
            navbarTitle.classList.add('opacity-0');
            navbarTitle.classList.remove('text-gray-900', 'dark:text-white');
            navbarTitle.classList.add('text-white');
        }

        lastScrollY = currentScrollY;
    });
}); 