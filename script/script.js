let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__button-close');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popupName = document.querySelector('.popup__field_name');
let popupAbout = document.querySelector('.popup__field_about');
const formElement = document.querySelector('.popup__input');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function popupOpen() {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupAbout.value = profileAbout.textContent;
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', popupOpen);
buttonClose.addEventListener('click', popupClose);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileAbout.textContent = popupAbout.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);