/**
 * Created by User on 005 05.07.21.
 */

'use strict'

export default () => {

    let multiItemSlider = (function () {




        return function (selector, config) {




            let $mainElement = document.querySelector(selector), //основной элемент блока
                $sliderWrapper = $mainElement.querySelector('.slider__wrapper'), //обертка для .slider-item
                $sliderItems = $mainElement.querySelectorAll('.slider__item'), //элементы .slider-item
                $sliderControls = $mainElement.querySelectorAll('.slider__control'), //элементы .slider-item
                $sliderControlLeft = $mainElement.querySelector('.slider__control_left'), //кнопка "Left"
                $sliderControlRight = $mainElement.querySelector('.slider__control_right'), //кнопка "Right"
                $wrapperWidth = parseFloat(getComputedStyle($sliderWrapper).width), //ширина обертки
                $itemWidth = parseFloat(getComputedStyle($sliderItems[0]).width), //ширина одного элемента
                $posThreshold = $itemWidth*0.025,
                $posInitial = 0,
                $posFinal = 0,
                $positionLeftItem = 1, //позиция левого активного элемента
                $activeItem = 1, //позиция левого активного элемента
                $transform = 0, //значение трансформации .slider__wrapper
                $step = $itemWidth / $wrapperWidth * 100, //величина шага(для трансформации)
                $items = []




            $sliderItems.forEach(function (item, index) {
                $items.push(
                    {
                        item: item,
                        position: index,
                        transform: 0
                    }
                )
            })
            let position = {
                getMin: 0,
                getMax: $items.length - 1
            }





            let transformItem = function (direction) {


                if (direction === 'right') {
                    if (($positionLeftItem + $wrapperWidth / $itemWidth - 1) > position.getMax) {
                        return
                    }
                    if (!$sliderControlLeft.classList.contains('slider__control_show')) {
                        $sliderControlLeft.classList.add('slider__control_show')
                    }

                    if ($sliderControlRight.classList.contains('slider__control_show') && ($positionLeftItem + $wrapperWidth / $itemWidth) > position.getMax) {
                        $sliderControlRight.classList.remove('slider__control_show')
                    }

                    let items = document.querySelectorAll('.single-dot');
                    items.forEach(it => {
                        it.classList.remove('active');

                    })

                    document.querySelector(`.single-dot[data="${$activeItem+1}"]`).classList.add('active');
                    $activeItem++;
                    $positionLeftItem++
                    $transform -= $step

                    console.log("Active Item: " + $activeItem + " positionLeftItem: "+ $positionLeftItem + " position.getMin: "+ position.getMin + " transform: " + $transform);

                }

                if (direction === 'left') {
                    if ($positionLeftItem <= position.getMin+1) {
                        return
                    }
                    if (!$sliderControlRight.classList.contains('slider__control_show')) {
                        $sliderControlRight.classList.add('slider__control_show')
                    }



                    if ($sliderControlLeft.classList.contains('slider__control_show') && $positionLeftItem <= position.getMin+2) {
                        $sliderControlLeft.classList.remove('slider__control_show')
                    }

                    let items = document.querySelectorAll('.single-dot');
                    items.forEach(it => {
                        it.classList.remove('active');

                    })

                    document.querySelector(`.single-dot[data="${$activeItem-1}"]`).classList.add('active');
                    $activeItem--;
                    $positionLeftItem--
                    $transform += $step


                    console.log("Active Item: " + $activeItem + " positionLeftItem: "+ $positionLeftItem + " position.getMin: "+ position.getMin+1 + " transform: " + $transform);

                }

                $sliderWrapper.style.transform = 'translateX(' + $transform + '%)'
            }



            //-------------SWIPE SLIDER START----------------------



            $mainElement.addEventListener('mousedown', (event)=>{

               $posInitial = event.clientX;
            });

            $mainElement.addEventListener('mouseup', (event)=>{
                $posFinal = event.clientX;

                if(($posFinal - $posInitial)<0 && Math.abs($posFinal - $posInitial)>$posThreshold){
                    let direction = 'right';
                    transformItem(direction);
                }
                else if(($posFinal - $posInitial)>0 && Math.abs($posFinal - $posInitial)>$posThreshold) {
                    let direction = 'left';
                    transformItem(direction);
                };

            });




            //-------------SWIPE SLIDER END----------------------


            //-------------DOTS BLOCK START----------------------

            let displayDots = true;

            if(displayDots){
                let dotsBlock = document.createElement('div');
                dotsBlock.classList.add('dots');
                let ul = document.createElement('ul');
                for(let i=0; i<position.getMax+1; i++){
                    let dot = document.createElement('li');
                    dot.classList.add('single-dot');
                    dot.setAttribute('data', i+1);
                    ul.appendChild(dot);
                }
                ul.children[0].classList.add('active');
                dotsBlock.appendChild(ul);
                $mainElement.appendChild(dotsBlock);

            }

            let dotItems = document.querySelectorAll('.single-dot');
            let dotOldValue = 1;
            dotItems.forEach(item =>{

                item.addEventListener('click', (e) =>{
                    e.preventDefault();
                    let items = document.querySelectorAll('.single-dot');
                    items.forEach(it => {
                        it.classList.remove('active');
                    })

                    e.target.classList.add('active');
                    let dotNewValue = e.target.getAttribute('data');

                    dotNewValue = parseInt(dotNewValue);

                    if(dotNewValue<position.getMax+1 && dotNewValue>position.getMin+1 && !$sliderControlRight.classList.contains('slider__control_show')){
                        $sliderControlRight.classList.add('slider__control_show')
                    }

                    if((dotNewValue - dotOldValue)>0){
                        dotClickTransformItemToRight(dotNewValue - dotOldValue, dotNewValue);
                    }

                    else{
                        dotClickTransformItemToLeft(dotNewValue - dotOldValue, dotNewValue)
                    }
                    dotOldValue = dotNewValue;
                });
            })


            let dotClickTransformItemToRight = function (count, itemPos){
                $positionLeftItem= parseInt(itemPos);
                $activeItem = $positionLeftItem;

                if (($positionLeftItem > position.getMax+1)) {
                    return false;
                }


                if (!$sliderControlLeft.classList.contains('slider__control_show')) {
                    $sliderControlLeft.classList.add('slider__control_show')
                }

                if ($positionLeftItem > position.getMax) {
                    $sliderControlRight.classList.remove('slider__control_show');
                }


                $transform = -$step*($positionLeftItem-1);
                $sliderWrapper.style.transform = 'translateX(' + $transform + '%)';

                console.log("Active Item: " + $activeItem + " positionLeftItem: "+ $positionLeftItem + " position.getMin: "+ position.getMin + " transform: " + $transform);
            }


            let dotClickTransformItemToLeft = function (count, itemPos){
                $positionLeftItem= parseInt(itemPos);
                $activeItem = $positionLeftItem;

                if ($positionLeftItem < position.getMin+1) {
                    return
                }
                if (!$sliderControlRight.classList.contains('slider__control_show')) {
                    $sliderControlRight.classList.add('slider__control_show')
                }

                if ($sliderControlLeft.classList.contains('slider__control_show') && $positionLeftItem <= position.getMin+1) {
                    $sliderControlLeft.classList.remove('slider__control_show')
                }


                $transform = -$step*($positionLeftItem-1);
                $sliderWrapper.style.transform = 'translateX(' + $transform + '%)';

                console.log("Active Item: " + $activeItem + " positionLeftItem: "+ $positionLeftItem + " position.getMin: "+ position.getMin + " transform: " + $transform);
            }




            //-------------DOTS BLOCK END----------------------


            //обработчик события click для кнопок "назад" и "вперед"
            let $controlClick = function (e) {
                if (e.target.classList.contains('slider__control')) {
                    e.preventDefault()
                    let direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left'
                    transformItem(direction)
                }
            }



            let setUpListeners = function () {
                $sliderControls.forEach(function (item) {
                    item.addEventListener('click', $controlClick)
                })
            }

            //инициализация
            setUpListeners()

            return {
                right: function () {
                    transformItem('right')
                },
                left: function () {
                    transformItem('left')
                }
            }
        }



    }());




    let slider = multiItemSlider('.slider')

}


