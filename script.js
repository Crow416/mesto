let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__button-close');
let popup = document.querySelector('.popup');

function popupOpen() {
    popup.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', popupOpen);
buttonClose.addEventListener('click', popupClose);