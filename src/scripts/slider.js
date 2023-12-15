document.addEventListener('DOMContentLoaded', (event) => {
    let slider = document.getElementById('slider');
    let image = document.getElementById('sliderimage');

    slider.addEventListener("input", function(event) {
        let value = slider.value
        image.setAttribute('src', `./images/slider/${value}.gif`)
    });
})