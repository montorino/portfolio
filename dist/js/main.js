let slideValue = document.querySelector('span'),
    inputSlider = document.querySelector('input'),
    percent

inputSlider.oninput = (()=>{
    let value = inputSlider.value
    slideValue.textContent = value
    slideValue.style.left = value*100/inputSlider.getAttribute('max') + "%"
    slideValue.classList.add('show')
    inputSlider.onblur = (()=>{
        slideValue.classList.remove('show')
    })
    percent = Math.ceil(((inputSlider.value - inputSlider.min) / (inputSlider.max - inputSlider.min)) * 100);
    $('input').css('background', '-webkit-linear-gradient(left, #007bff 0%, #007bff ' + percent + '%, #ddd ' + percent + '%)');
})







