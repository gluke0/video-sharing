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

// sidebar item
sideItems.forEach(sideItem =>{
    sideItem.addEventListener('click', () =>{
        sideItems.forEach(item => {
            item.classList.remove('active');
        });
        sideItem.classList.add('active');
    });
});

// category item
cateItems.forEach(catItem =>{
    catItem.addEventListener('click', () =>{
        cateItems.forEach(item =>{
            item.classList.remove('active');
        });
        catItem.classList.add('active');
    });
});

// small scroll sidebar
window.addEventListener('scroll', () =>{
    if (window.innerWidth <= 992){
        if (this.pageYOffset > 20){
            sidebar.style.paddingTop = '20px';
        } else {
            sidebar.style.paddingTop = '70px';
        }
    }
});