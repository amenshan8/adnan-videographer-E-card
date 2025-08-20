// Remove cinematic effects and add viewfinder functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add timecode animation
    const timecodeElement = document.querySelector('.timecode');
    if (timecodeElement) {
        let frames = 0;
        setInterval(() => {
            frames++;
            const seconds = Math.floor(frames / 24);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            
            const displayFrames = frames % 24;
            const displaySeconds = seconds % 60;
            const displayMinutes = minutes % 60;
            const displayHours = hours;
            
            timecodeElement.textContent = 
                `${String(displayHours).padStart(2, '0')}:${String(displayMinutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}:${String(displayFrames).padStart(2, '0')}`;
        }, 1000/24);
    }
    
    // Battery animation
    const batteryIcon = document.querySelector('.battery-icon i');
    if (batteryIcon) {
        setInterval(() => {
            const levels = ['fas fa-battery-full', 'fas fa-battery-three-quarters', 'fas fa-battery-half', 'fas fa-battery-quarter'];
            const currentLevel = batteryIcon.className;
            const currentIndex = levels.indexOf(currentLevel);
            const nextIndex = (currentIndex + 1) % levels.length;
            batteryIcon.className = levels[nextIndex];
        }, 5000);
    }
});

// Floating emoji background
function createFloatingEmojis() {
    const container = document.querySelector('.floating-emoji-container');
    const emojis = ['🎥', '📸', '🎬', '📽️', '📷', '🎞️', '🎭'];
    const numEmojis = 35; // Reduced number for better performance, within original requested range
    
    for (let i = 0; i < numEmojis; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji-float';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random positioning and animation properties
        const left = Math.random() * 100;
        const duration = 15 + Math.random() * 20; // 15-35 seconds
        const delay = Math.random() * 10; // 0-10 seconds delay
        const scale = 0.6 + Math.random() * 0.8; // 0.6-1.4 scale
        const opacity = 0.1 + Math.random() * 0.3; // Subtle opacity
        
        emoji.style.left = `${left}%`;
        emoji.style.setProperty('--duration', `${duration}s`);
        emoji.style.setProperty('--delay', `${delay}s`);
        emoji.style.setProperty('--scale', scale);
        emoji.style.setProperty('--opacity', opacity);
        emoji.style.setProperty('--start-rotation', `${Math.random() * 360}deg`);
        emoji.style.setProperty('--end-rotation', `${Math.random() * 360}deg`);
        
        container.appendChild(emoji);
    }
}

// Initialize floating emojis when DOM loads
document.addEventListener('DOMContentLoaded', createFloatingEmojis);

// Smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Generate vCard file dynamically
function generateVCard() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Adnan Kousa
TITLE:Social Media Marketer | Videographer  
ORG:Adnan Kousa
TEL:+31638724909
EMAIL:adnankousa24@gmail.com
URL:https://adzilla.nl/
NOTE:Capturing the moment. Crafting the brand.
END:VCARD`;

    // Create blob for download
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    
    // Update download link
    const vcardBtn = document.querySelector('.vcard-btn');
    if (vcardBtn) {
        vcardBtn.href = url;
    }
}

// Initialize vCard generation
generateVCard();
