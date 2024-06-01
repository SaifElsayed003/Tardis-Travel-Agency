document.getElementById('click-box').onclick = function() {
    var videoBg = document.getElementById('video-background');
    videoBg.pause();

    var albVideo = document.createElement('video');
    albVideo.src = 'time-travel.mp4';
    albVideo.style.position = 'absolute';
    albVideo.style.top = '0';
    albVideo.style.left = '0';
    albVideo.style.width = '100%';
    albVideo.style.height = '100%';
    albVideo.style.objectFit = 'cover'; // Ensure ALB video covers the entire background
    albVideo.autoplay = true;
    albVideo.muted = true;

    document.body.appendChild(albVideo);

    setTimeout(function() {
        albVideo.pause();
        document.body.removeChild(albVideo);

        videoBg.src = 'static-tv.mp4';
        videoBg.load();
        videoBg.play();

        var moveableImage = document.getElementById('moveable-image');
        moveableImage.style.display = 'none';

        var clickBox = document.getElementById('click-box');
        document.body.removeChild(clickBox);

        // Add new HTML tags here
        addNewElements();
    }, 2000); // Play ALB video for 2 seconds
};

function addNewElements() {
    // Add a new heading with the text "Hi Saif"
    var heading = document.createElement('h1');
    heading.textContent = 'Hi Saif';
    heading.style.position = 'absolute';
    heading.style.top = '20px';
    heading.style.left = '50%';
    heading.style.transform = 'translateX(-50%)';
    heading.style.color = 'white';
    document.body.appendChild(heading);
}

function checkBox() {
    
}