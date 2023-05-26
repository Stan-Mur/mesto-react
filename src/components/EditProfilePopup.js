import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useContext, useEffect, useState } from 'react';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function changeName(e) {
    setName(e.target.value);
  }

  function changeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      type="redact"
      isOpen={isOpen ? "popup_opened" : ""}
      onClose={onClose}
      name="profile"
      title="Редактировать профиль"
      text="Сохранить"
      children={
        <>
          <input
            id="name-input"
            value={`${name}`}
            onChange={changeName}
            name="name"
            type="text"
            className="form__input form__input_type_name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="form__input-error name-input-error"></span>
          <input
            id="job-input"
            value={`${description}`}
            onChange={changeDescription}
            name="about"
            type="text"
            className="form__input form__input_type_job"
            placeholder="Род деятельности"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="form__input-error job-input-error"></span>
        </>
      }
    />
  );
}

export default EditProfilePopup;
