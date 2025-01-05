window.onload = function() {
    var audio = new Audio('back.mp3');
    audio.loop = true;
    audio.play();
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('audio');

    // Try to play automatically
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(function(error) {
            // Auto-play was prevented
            console.log("Autoplay prevented");
        });
    }
});

// Alternative: Play on user interaction (more reliable)
document.addEventListener('click', function() {
    const audio = document.querySelector('audio');
    audio.play();
}, { once: true });