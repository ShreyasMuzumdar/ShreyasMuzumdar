// Google Tag Manager
(function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MX52ZK34');
// End Google Tag Manager

// Google Tag Manager (noscript)
document.addEventListener('DOMContentLoaded', function() {
    var noscript = document.createElement('noscript');
    var iframe = document.createElement('iframe');
    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-MX52ZK34";
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
});
// End Google Tag Manager (noscript)

document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const textElement = document.getElementById('typing-effect');
    const text = "Hello, I'm Shreyas Muzumdar. Welcome to my portfolio!<br>I am an engineering student, web developer, and a tech enthusiast.<br>Feel free to explore my projects and get in touch with me.";
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



sections.forEach(section => {
    observer.observe(section);
});
