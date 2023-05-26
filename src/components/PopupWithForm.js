function PopupWithForm({ onSubmit, type, isOpen, onClose, name, title, text, children}) {
  return (
    <div className={`popup popup_type_${type} ${isOpen}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          type="button"
          className="popup__close-button"
        ></button>
        <form
          id={`${name}`}
          onSubmit={onSubmit}
          name={`${name}`}
          className="form"
        >
          <h2 className="form__title">{title}</h2>
          {children}
          <button type="submit" className="form__save-button">
            {text}
          </button>
          <div className="form__loading">Загрузка...</div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
