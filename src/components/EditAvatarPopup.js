import PopupWithForm from "./PopupWithForm.js";
import { useRef } from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      type="redact-avatar"
      isOpen={isOpen ? "popup_opened" : ""}
      onClose={onClose}
      name="redactAvatar"
      title="Обновить аватар"
      text="Сохранить"
      children={
        <>
          <input
            id="link-input"
            ref={avatarRef}
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
  );
}

export default EditAvatarPopup;
