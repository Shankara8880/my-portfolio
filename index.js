function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const skillsList = document.querySelectorAll('#skills ul li');

    if (window.scrollY + window.innerHeight >= skillsSection.offsetTop) {
        skillsList.forEach((skill, index) => {
            setTimeout(() => {
                skill.style.transform = 'translateX(0)';
                skill.style.opacity = 1;
            }, index * 200); // Delay each item animation
        });
    }
});
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('show');
}

function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('show');
}

document.querySelectorAll('.nav-links ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        nav.classList.remove('show'); // Close menu after clicking
    });
});
