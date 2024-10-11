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

// Google Analytics (gtag.js)
(function() {
    var gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-PLWWMBKS0V";
    document.head.appendChild(gtagScript);

    gtagScript.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PLWWMBKS0V');
    };
})();
// End Google Analytics (gtag.js)


// Microsoft Clarity
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "og8yr14117");
// End Microsoft Clarity


document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const textElement = document.getElementById('typing-effect');
    const text = "Hello, My name is Shreyas Muzumdar. Motivated high school student working to become a robotics engineer. Over the past few years, worked on various projects broadening my engineering experience. Eager to work hard while learning new concepts and helping you and your team in any way I can. ";
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
