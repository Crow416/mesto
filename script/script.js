const popupEdit = document.querySelector('.popup_edit'); // попап редактирования профиля
const profileButtonEdit = document.querySelector('.profile__button-edit'); // кнопка открытия попапа редактирования профиля
const popupButtonCloseEdit = document.querySelector('.popup__button-close_edit'); // кнопка закрытия попапа редактирования профиля
const popupAdd = document.querySelector('.popup_add'); // попап добавления карточки
const profileButtonAdd = document.querySelector('.profile__button-add'); // кнопка открытия попапа добавления карточки
const popupButtonCloseAdd = document.querySelector('.popup__button-close_add'); // кнопка закрытия попапа добавления карточки
const formElementEdit = document.querySelector('.popup__input_edit'); // форма редактирования профиля
const nameInput = formElementEdit.querySelector('.popup__field_name'); // поле ввода имени
const aboutInput = formElementEdit.querySelector('.popup__field_about'); // поле ввода информации о себе
const formElementAdd = document.querySelector('.popup__input_add'); // форма добавления карточки
const elements = document.querySelector('.elements__list'); // контейнер в DOM для добавления карточек
const popupImage = document.querySelector('.popup__image'); // попап изображения
const popupButtonCloseImage = document.querySelector('.popup__button-close_image'); // кнопка закрытия попапа с изображением
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
]; // готовый массив карточек

// функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// слушатель кнопки открытия попапа редактирования профиля
profileButtonEdit.addEventListener('click', () => {
  document.querySelector('.popup__field_name').value = document.querySelector('.profile__name').textContent;
  document.querySelector('.popup__field_about').value = document.querySelector('.profile__about').textContent;
  openPopup(popupEdit);
});

// слушатель кнопки закрытия попапа редактирования профиля
popupButtonCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});

// слушатель закрытия попапа редактирования профиля по клику вне области попапа
popupEdit.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup(popupEdit);
  }
});

// слушатель кнопки открытия попапа добавления карточки
profileButtonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});

// слушатель кнопки закрытия попапа добавления карточки
popupButtonCloseAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});

// слушатель закрытия попапа добавления карточки по клику вне области попапа
popupAdd.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup(popupAdd);
  }
});

// функция отправки данных из формы редактирования профиля
function formSubmitEdit(evt) {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = document.querySelector('.popup__field_name').value;
  document.querySelector('.profile__about').textContent = document.querySelector('.popup__field_about').value;
  closePopup(popupEdit);
}

// слушатель отправки данных из формы редактирования профиля
formElementEdit.addEventListener('submit', formSubmitEdit);

// функция открытия попапа с изображением
function imageOpen(cardData) {
  const popupImageOpen = popupImage.querySelector('.popup__image_img');
  const popupImageTitle = popupImage.querySelector('.popup__image_title');
  popupImageOpen.setAttribute('src', cardData.link);
  popupImageOpen.setAttribute('alt', cardData.name);
  popupImageTitle.textContent = cardData.name;

  openPopup(popupImage);
}

// слушатель кнопки закрытия попапа с изображением
popupButtonCloseImage.addEventListener('click', () => {
  closePopup(popupImage);
});

// слушатель закрытия попапа с изображением по клику вне области попапа
popupImage.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup(popupImage);
  }
});

// функция создания карточки
function createCard(cardData) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementTitle = cardElement.querySelector('.element__title');

  elementImage.setAttribute('src', cardData.link);
  elementImage.setAttribute('alt', cardData.name);
  elementTitle.textContent = cardData.name;

  const elementLike = cardElement.querySelector('.element__like');
  elementLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
    evt.stopPropagation();
  });

  const elementDelete = cardElement.querySelector('.element__delete');
  elementDelete.addEventListener('click', (evt) => {
    cardElement.remove();
    evt.stopPropagation();
  });

  cardElement.addEventListener('click', () => {
    imageOpen(cardData);
  });

  return cardElement;
}

// функция добавления карточки в DOM
function addCard(cardData, cardContainer) {
  const card = createCard(cardData);
  cardContainer.prepend(card);
}

// слушатель отправки данных из формы добавления карточки
formElementAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCard(
    {
      name: formElementAdd.querySelector('.popup__field_title').value,
      link: formElementAdd.querySelector('.popup__field_src').value,
    },
    elements
  );
  formElementAdd.reset();
  closePopup(popupAdd);
});

// начальная отрисовка карточек
initialCards.forEach((item) => {
  addCard(item, elements);
});
