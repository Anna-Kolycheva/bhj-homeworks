document.querySelector(".slider__arrow_prev").onclick = () => slid(-1);
document.querySelector(".slider__arrow_next").onclick = () => slid(1);

const images = Array.from(document.getElementsByClassName("slider__item"));
const dots = Array.from(document.getElementsByClassName("slider__dot"));

const slid = (step) => {
    let i = images.indexOf(document.querySelector(".slider__item_active"));
    images[i].classList.remove('slider__item_active');
    dots[i].classList.remove('slider__dot_active');
    i=i+step;
    if (i > images.length - 1) {
        i = 0;
    } else if (i < 0) {
        i = images.length - 1;
    }
    images[i].classList.add('slider__item_active');
    dots[i].classList.add('slider__dot_active');
}

dots.forEach(element => {
    element.onclick = () => {
    	let i = images.indexOf(document.querySelector(".slider__item_active"));
    	images[i].classList.remove('slider__item_active');
        dots[i].classList.remove('slider__dot_active');

        element.classList.add('slider__dot_active');
        i = dots.indexOf(document.querySelector(".slider__dot_active"));
        images[i].classList.add('slider__item_active');
    }
});