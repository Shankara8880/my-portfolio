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
