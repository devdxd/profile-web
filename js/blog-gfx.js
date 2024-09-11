let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})

prev.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
})

document.querySelectorAll('.slides').forEach(image =>{
    image.onclick = () => {
        let imgUrl = image.style.getPropertyValue('--img');

        imgUrl = imgUrl.slice(5, -2);

        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = imgUrl;
    }
})

document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none';
}

document.querySelector('.popup-img').onclick = (e) => {
    // Pastikan klik tidak terjadi pada elemen gambar
    if (e.target === document.querySelector('.popup-img')) {
        document.querySelector('.popup-img').style.display = 'none';
    }
};