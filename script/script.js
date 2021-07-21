//попап редактирования профиля 

const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popupName = document.querySelector('.popup__field_name');
const popupAbout = document.querySelector('.popup__field_about');

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


//попап добавления карточки

const buttonAdd = document.querySelector('.profile__button-add');
const buttonCloseAdd = document.querySelector('.popup__button-close_add');
const popupAdd = document.querySelector('.popup__add');
const formElement = document.querySelector('.popup__input');
const popupTitle = document.querySelector('popup__field_title');
const popupSrc = document.querySelector('popup__field_src');
const elementsList = document.querySelector('elements__list');
const initialCards = [{
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

function popupAddOpen() {
  popupAdd.classList.add('popup_opened');
}

function popupAddClose() {
  popupAdd.classList.remove('popup_opened');
}

buttonAdd.addEventListener('click', popupAddOpen);
buttonCloseAdd.addEventListener('click', popupAddClose);


formElement.addEventListener('submit', formSubmitHandler);

function addElement(evt) {
  evt.preventDefault();
  const elementContainer = document.createElement('li');
  elementContainer.classList.add('element');
  const elementImage = document.createElement('img');
  elementImage.classList.add('element__image');
  elementImage.src = popupSrc.value;
  const elementTitle = document.createElement('h2');
  elementTitle.classList.add('element__title');
  elementTitle.textContent = popupTitle.value;
  elementContainer.prepend(elementImage, elementTitle);
  elementsList.prepend(elementContainer);
  popupAddClose();
}

formElement.addEventListener('submit', addElement);