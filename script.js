// кнопки
const btn_burger = document.querySelector('.menu-button__burger');
const btn_burger_close = document.querySelector('.menu-button__close');
const btn_call = document.querySelector('.menu-button__call',);
const btn_message = document.querySelector('.menu-button__chat');
const btn_call_close = document.querySelector('.modal-call__btn-close');
const btn_message_close = document.querySelector('.modal-message__btn-close');
const btn_call_dd = document.querySelector( '.dropdown-footer-button__call');
const btn_message_dd = document.querySelector( '.dropdown-footer-button__chat');
// блоки
const dropdown =  document.querySelector('.dropdown-container');
const modal_call = document.querySelector('.modal-call');
const modal_message = document.querySelector('.modal-message')

btn_burger.addEventListener('click', function(){
    dropdown.classList.add('dropdown-container__active')
})
btn_burger_close.addEventListener('click', function(){
    dropdown.classList.remove('dropdown-container__active')
})
btn_call.addEventListener('click', function(){
    modal_call.classList.add('modal-call__active')
})
btn_call_dd.addEventListener('click', function(){
    modal_call.classList.add('modal-call__active')
})
btn_call_close.addEventListener('click', function(){
    modal_call.classList.remove('modal-call__active')
})
btn_message.addEventListener('click', function(){
    modal_message.classList.add('modal-message__active')
})
btn_message_dd.addEventListener('click', function(){
    modal_message.classList.add('modal-message__active')
})
btn_message_close.addEventListener('click', function(){
    modal_message.classList.remove('modal-message__active')
})