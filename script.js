// кнопки
const btn_burger = document.querySelector('.menu-button__burger');
const btn_burger_close = document.querySelector('.menu-button__close');
const btn_call = document.querySelector('.menu-button__call',);
const btn_message = document.querySelector('.menu-button__chat');
const btn_call_close = document.querySelector('.modal-call__btn-close');
const btn_message_close = document.querySelector('.modal-message__btn-close');
const btn_call_dd = document.querySelector( '.dropdown-footer-button__call');
const btn_message_dd = document.querySelector( '.dropdown-footer-button__chat');
const body = document.querySelector('body');
const veil = document.querySelector('.page-container__veil');
const about_control = document.querySelector('.about__control');
const brand_control = document.querySelector('.brand-control')
const repairControl = document.querySelector('.repair-control')

// блоки
const dropdown =  document.querySelector('.dropdown-container');
const modal_call = document.querySelector('.modal-call');
const modal_message = document.querySelector('.modal-message')
const hiddenText = document.querySelector('.about-text-section')
const btnMoreInfoAbout = document.querySelector('.about__control');
const moreInfoTextAbout = document.querySelector('.about__control-name');
const arrowAbout = document.querySelector('.about__control-icon');
const hiddenTextAbout = document.querySelector('.about-text-section__hidden')
const arrowBrand = document.querySelector('.brand__control-icon')
const brandText = document.querySelector ('.brand__control-name')
const brandWrap = document.querySelector ('.brand-card-desktop-wrap')
const repairWrap = document.querySelector ('.repair-card-desktop-wrap')
const repairText = document.querySelector ('.repair__control-name')
const repairArrow = document.querySelector ('.brand__control-icon')
const bodyMain = document.querySelector ('body')

btn_burger.addEventListener('click', function(){
    dropdown.classList.add('dropdown-container__active')
    veil.classList.add('page-container__veil--active')
    bodyMain.classList.add('overflow-block')
    
})
btn_burger_close.addEventListener('click', function(){
    dropdown.classList.remove('dropdown-container__active')
    veil.classList.remove('page-container__veil--active')
    bodyMain.classList.remove('overflow-block')
})
btn_call.addEventListener('click', function(){
    if(
        !modal_call.classList.contains('modal-call__active') 
    ) {
        modal_call.classList.add('modal-call__active')
        veil.classList.add('page-container__veil--active')
        bodyMain.classList.add('overflow-block')
        modal_message.classList.remove('modal-message__active')
    }else{
        modal_call.classList.remove('modal-call__active')
        veil.classList.remove('page-container__veil--active')
        bodyMain.classList.remove('overflow-block')
    }
    
})
btn_call_dd.addEventListener('click', function(){
    if(
        !modal_call.classList.contains('modal-call__active') 
    ) {
        modal_call.classList.add('modal-call__active')
        veil.classList.add('page-container__veil--active')
        bodyMain.classList.add('overflow-block')
        modal_message.classList.remove('modal-message__active')
    }else{
        modal_call.classList.remove('modal-call__active')
        veil.classList.remove('page-container__veil--active')
        bodyMain.classList.remove('overflow-block')
    }
    
})
btn_call_close.addEventListener('click', function(){
    modal_call.classList.remove('modal-call__active')
    veil.classList.remove('page-container__veil--active')
    bodyMain.classList.remove('overflow-block')

})
btn_message.addEventListener('click', function(){
    if(
        !modal_message.classList.contains('modal-message__active') 
    ) {
        modal_message.classList.add('modal-message__active')
        veil.classList.add('page-container__veil--active')
        bodyMain.classList.add('overflow-block')
        modal_call.classList.remove('modal-call__active')
    }else{
        modal_message.classList.remove('modal-message__active')
        veil.classList.remove('page-container__veil--active')
        bodyMain.classList.remove('overflow-block')
    }
})
btn_message_dd.addEventListener('click', function(){
    if(
        !modal_message.classList.contains('modal-message__active') 
    ) {
        modal_message.classList.add('modal-message__active')
        veil.classList.add('page-container__veil--active')
        bodyMain.classList.add('overflow-block')
        modal_call.classList.remove('modal-call__active')
    }else{
        modal_message.classList.remove('modal-message__active')
        veil.classList.remove('page-container__veil--active')
        bodyMain.classList.remove('overflow-block')
    }

})
btn_message_close.addEventListener('click', function(){
    modal_message.classList.remove('modal-message__active')
    veil.classList.remove('page-container__veil--active')
    bodyMain.classList.remove('overflow-block')
})
veil.addEventListener('click' , function(){
    dropdown.classList.remove('dropdown-container__active')
    modal_call.classList.remove('modal-call__active')
    modal_message.classList.remove('modal-message__active')
    veil.classList.remove('page-container__veil--active')
    bodyMain.classList.remove('overflow-block')
})
about_control.addEventListener('click', function(){
    if (
        !hiddenText.classList.contains('about-text-section--active') 
    ) {
        hiddenText.classList.add('about-text-section--active');
        hiddenTextAbout.classList.add('about-text-section__hidden--active')
        arrowAbout.style.transform = 'rotate(180deg)';
        moreInfoTextAbout.innerText = 'Скрыть';
    } else {
        arrowAbout.style.transform = 'rotate(0deg)';
        moreInfoTextAbout.innerText = 'Читать далее';
        hiddenText.classList.remove('about-text-section--active');
        hiddenTextAbout.classList.remove('about-text-section__hidden--active')
    }
})
brand_control.addEventListener('click', function(){
    if (
        !brandWrap.classList.contains('brand-card-wrap--active') 
    ) {
        brandWrap.classList.add('brand-card-wrap--active')
        arrowBrand.style.transform = 'rotate(180deg)';
        brandText.innerText = 'Скрыть';
    } else {
        arrowBrand.style.transform = 'rotate(0deg)';
        brandText.innerText = 'Показать все';
        brandWrap.classList.remove('brand-card-wrap--active');
    }
})
repairControl.addEventListener('click', function(){
    if (
        !repairWrap.classList.contains('repair-card-wrap--active') 
    ) {
        repairWrap.classList.add('repair-card-wrap--active')
        repairArrow.style.transform = 'rotate(180deg)';
        repairText.innerText = 'Скрыть';
    } else {
        repairArrow.style.transform = 'rotate(0deg)';
        repairText.innerText = 'Показать все';
        repairWrap.classList.remove('repair-card-wrap--active');
    }
})

 window.addEventListener('DOMContentLoaded', function(){
    if (window.innerWidth < 768) {
        new Swiper(document.querySelector('.brand-slider'), {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            initialSlide: 0,
            slidesPerView: 1.2,
            loop: true,
            autoplay: {
                delay: 4000,
                stopOnLastSlide: true,
                disableOnInteraction: false
            }
        });
    
        new Swiper('.repair-slider', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            initialSlide: 0,
            slidesPerView: 1.16,
            loop: true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: true,
                disableOnInteraction: false
            }
        });
    
        new Swiper('.price-slider', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            initialSlide: 0,
            slidesPerView: 1.16,
            loop: true,
            autoplay: {
                delay: 2000,
                stopOnLastSlide: true,
                disableOnInteraction: false
            }
        });
    }
 })