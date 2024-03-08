

let img = document.querySelector('img');
let video = document.querySelector('video');

img.addEventListener('click', () => {
    img.classList.add('active');
    video.classList.remove('active');
    video.play();

})


