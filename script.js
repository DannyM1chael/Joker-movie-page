let playBtn = document.querySelector('.play');
    playBtn.addEventListener('click', function playTrailer() {
    let trailer = document.querySelector('.trailer');
    trailer.style.visibility = 'visible';
    trailer.style.opacity = 1;
})

let closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function closeTrailer() {
    let trailer = document.querySelector('.trailer');
    trailer.style.visibility = 'hidden';
    trailer.style.opacity = 0;
})