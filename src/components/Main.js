import React from 'react';
import {api} from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
      function initialUser() {
        api.initialUsers()
            .then((result) => {
              setUserName(
                result.name
              );
              setDescription(
                result.about
              );
              setUserAvatar(
                result.avatar
              );
            })
            .catch((err) => {
               console.log(err)
            })
      }
      initialUser();
    }, []);

      React.useEffect(() => {
      function initialCards() {
        api.initCardsFromServer()
        .then((result) => {
          setCards([...result.reverse()])
          })
        .catch((err) => {
           console.log(err)
        })
      }
      initialCards();
    },[]);
    

  return (
    <main className="main">
        <section className="profile">
            <div className="profile-avatar">
                <img id="avatar" className="profile-avatar__image" src= {userAvatar} alt='Аватарка' />
                <button onClick={props.onEditAvatar} type="button" className="profile-avatar__redact-button"></button>
            </div>
            <div className="profile-info">
                <h1 id="name" className="profile-info__name">{userName}</h1>
                <p id="about" className="profile-info__job">{userDescription}</p>
                <button onClick={props.onEditProfile} type="button" className="profile-info__edit-button"></button>
            </div>
            <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
        </section>
        <section className="elements">
        {cards.map((card) => ( 
          <Card key={card._id} card ={card} onCardClick ={props.onCardClick} /> 
        ))}
        </section>
    </main>
  );
}

export default Main;