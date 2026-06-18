document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navBar = document.querySelector('.nav-bar');
    const links = document.querySelectorAll('.nav-links a');
    let lastScroll = 0;

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    links.forEach(link => link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    }));

    window.addEventListener('scroll', () => {
        const current = window.pageYOffset;
        if (current > lastScroll && current > 100) {
            navBar.classList.add('hidden');
        } else {
            navBar.classList.remove('hidden');
        }
        lastScroll = current;
    });
});
