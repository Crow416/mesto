//открытие и закрытие попапов
const buttonEdit = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_edit');
const buttonCloseEdit = document.querySelector('.popup__button-close_edit');
const buttonCloseAdd = document.querySelector('.popup__button-close_add');
const buttonSaveEdit = document.querySelector('.popup__button-save_edit');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popupEditName = document.querySelector('.popup__field_name');
const popupEditAbout = document.querySelector('.popup__field_about');
const formElement = document.querySelector('.popup__input');
const buttonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_add');

function popupOpen(popup) {
    popup.classList.add('popup_opened');
}

function popupClose(popup) {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupEditName.value;
    profileAbout.textContent = popupEditAbout.value;
    popupClose(popupEdit);
}

buttonEdit.addEventListener('click', () => {
    popupEditName.value = profileName.textContent;
    popupEditAbout.value = profileAbout.textContent;
    popupOpen(popupEdit);
});

buttonAdd.addEventListener('click', () => {
    popupOpen(popupAdd);
});

buttonCloseEdit.addEventListener('click', () => {
    popupClose(popupEdit);
});

popupEdit.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        popupClose(popupEdit);
    }
});

popupAdd.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        popupClose(popupAdd);
    }
});

buttonCloseAdd.addEventListener('click', () => {
    popupClose(popupAdd);
});

formElement.addEventListener('submit', formSubmitHandler);