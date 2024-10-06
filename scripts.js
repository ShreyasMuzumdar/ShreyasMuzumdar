document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const textElement = document.getElementById('typing-effect');
    const text = "Hello, I'm Shreyas Muzumdar.<br>Welcome to my portfolio!<br>I am an engineering student, web developer, and a tech enthusiast.<br>Feel free to explore my projects and get in touch with me.";
    let index = 0;

    function type() {
        if (index < text.length) {
            if (text.charAt(index) === '<') {
                const endIndex = text.indexOf('>', index);
                textElement.innerHTML += text.substring(index, endIndex + 1);
                index = endIndex + 1;
            } else {
                textElement.innerHTML += text.charAt(index);
                index++;
            }
            setTimeout(type, 25); // Adjust speed here
        }
    }

    type();

    // Toggle lights
    const toggleButton = document.getElementById('toggle-button');
    const sections = document.querySelectorAll('section');

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        // Toggle text content in sections
        sections.forEach(section => {
            const paragraphs = section.querySelectorAll('p');
            paragraphs.forEach(paragraph => {
                if (document.body.classList.contains('dark-mode')) {
                    paragraph.textContent = "Dark mode text for " + section.id;
                } else {
                    paragraph.textContent = "Light mode text for " + section.id;
                }
            });
        });
    });

    // Set initial mode
    document.body.classList.add('light-mode');
});

// Scroll Indicator
window.onscroll = function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-indicator').style.width = scrolled + "%";
};

// Fade-in on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});
