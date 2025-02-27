// Typing effect with robotic sound simulation
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-effect');
    const text = "Hello, My name is Shreyas Muzumdar. Motivated high school student working to become a robotics engineer. Over the past few years, worked on various projects broadening my engineering experience. Eager to work hard while learning new concepts and helping you and your team in any way I can.";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50); // Typing speed
            simulateRobotSound(); // Simulate robotic typing sound
        }
    }

    function simulateRobotSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(100 + Math.random() * 500, audioContext.currentTime);
        oscillator.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.05);
    }

    type();
});

// AR/VR integration for robot models
document.addEventListener('DOMContentLoaded', function() {
    const robotLinks = document.querySelectorAll('.robot a[rel="ar"]');
    robotLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Open this link on an AR-compatible device to view the robot in 3D!");
        });
    });
});

// Dark mode toggle with futuristic transition
const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    document.body.style.transition = 'background-color 1s, color 1s';
});