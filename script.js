let totVideos = document.querySelectorAll('video');
let sidebar = document.querySelector('.left_section');
let sideItems = document.querySelectorAll('.sidebar .item');
let cateItems = document.querySelectorAll('.categories a');

// play/pause hover
totVideos.forEach(video =>{
    video.addEventListener('mouseover',() =>{
        video.play();
    });
    video.addEventListener('mouseleave',() =>{
        video.pause();
    });
});