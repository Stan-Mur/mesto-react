import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditAgreePopupOpen, setEditAgreePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    bool: false,
    link: "",
  });

  function handleCardClick(props) {
    setSelectedCard({
      bool: true,
      link: props,
    });
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setEditAgreePopupOpen(false);
    setSelectedCard({
      bool: false,
      link: "",
    });
  }

  return (
    <>
      <div className="page">
        <PopupWithForm
          type="redact"
          isOpen={isEditProfilePopupOpen ? "popup_opened" : ""}
          onClose={closeAllPopups}
          name="profile"
          title="Редактировать профиль"
          text="Сохранить"
          children={
            <>
              <input
                id="name-input"
                name="name"
                type="text"
                className="form__input form__input_type_name"
                placeholder="Имя"
                defaultValue="Имя"
                required
                minLength="2"
                maxLength="40"
              />
              <span className="form__input-error name-input-error"></span>
              <input
                id="job-input"
                name="about"
                type="text"
                className="form__input form__input_type_job"
                placeholder="Род деятельности"
                defaultValue="Род деятельности"
                required
                minLength="2"
                maxLength="200"
              />
              <span className="form__input-error job-input-error"></span>
            </>
          }
        />
        <PopupWithForm
          type="add-card"
          isOpen={isAddPlacePopupOpen ? "popup_opened" : ""}
          onClose={closeAllPopups}
          name="addCard"
          title="Новое место"
          text="Сохранить"
          children={
            <>
              <input
                id="title-input"
                name="title"
                type="text"
                className="form__input form__input_type_title"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30"
              />
              <span className="form__input-error title-input-error"></span>
              <input
                id="url-input"
                name="link"
                type="url"
                className="form__input form__input_type_link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="form__input-error url-input-error"></span>
            </>
          }
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          type="deletion"
          isOpen={isEditAgreePopupOpen ? "popup_opened" : ""}
          name="formAgree"
          title="Вы уверены?"
          text="Да"
        />
        <PopupWithForm
          type="redact-avatar"
          isOpen={isEditAvatarPopupOpen ? "popup_opened" : ""}
          onClose={closeAllPopups}
          name="redactAvatar"
          title="Обновить аватар"
          text="Сохранить"
          children={
            <>
              <input
                id="link-input"
                name="avatar"
                type="url"
                className="form__input form__input_type_avatar"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="form__input-error link-input-error"></span>
            </>
          }
        />
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
