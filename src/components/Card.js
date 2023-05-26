import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useContext } from 'react';

function Card({ card, onCardLike, onCardDelete, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }
  return (
    <div className="element">
      {isOwn &&
      <button
        type="button"
        onClick={handleDeleteClick}
        className="element__button-trash"
      ></button>}
      <img
        onClick={handleClick}
        src={card.link}
        alt={card.name}
        className="element__image"
      />
      <p className="element__text">{card.name}</p>
      <div className="element-like">
        <button
          type="button"
          onClick={handleLikeClick}
          className={`element-like__like ${isLiked && "element-like__like_active"}`}
        ></button>
        <p id="number" className="element-like__number">
          {card.likes.length}
        </p>
      </div>
    </div>
  );
}

export default Card;