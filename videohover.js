  const video = document.getElementById("hoverVideo");


document.querySelectorAll('.thumbnail').forEach(function(video) {
    video.addEventListener('mouseenter', function() {
        video.play();
    });
    video.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0;
    });
});