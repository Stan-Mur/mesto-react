import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useContext } from "react";

function Main({
  onEditAvatar,
  onAddPlace,
  onEditProfile,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile-avatar">
          <img
            id="avatar"
            className="profile-avatar__image"
            src={currentUser.avatar}
            alt="Аватарка"
          />
          <button
            onClick={onEditAvatar}
            type="button"
            className="profile-avatar__redact-button"
          ></button>
        </div>
        <div className="profile-info">
          <h1 id="name" className="profile-info__name">
            {currentUser.name}
          </h1>
          <p id="about" className="profile-info__job">
            {currentUser.about}
          </p>
          <button
            onClick={onEditProfile}
            type="button"
            className="profile-info__edit-button"
          ></button>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
        ></button>
      </section>
      <section className="elements">
        {cards
          .map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))
          .reverse()}
      </section>
    </main>
  );
}

export default Main;
