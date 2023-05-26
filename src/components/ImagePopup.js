function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_image ${
        card ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          onClick={onClose}
          type="button"
          className="popup__close-button"
        ></button>
        <div className="form-image">
          <img
            className="form-image__image"
            src={card?.link}
            alt={card?.name}
          />
          <p className="form-image__text">{card?.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;