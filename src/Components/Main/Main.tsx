import React from 'react';
import Card from "../Card/Card.tsx";

export default function Main({
  contact,
  onEditContact,
  onAddContact,
  onDeleteContact,
}) {
  return (
    <main className='main'>
      <section className="add-contact">
        <div className="profile__user">
            <button
              type="button"
              className="add-contact__button"
              onClick={onAddContact}
            >Добавить контакт</button>
        </div>
      </section>
      <section className="contacts">
        {contact.map((data) => {
          return (
            <Card
              card={data}
              key={data._id}
              onContactDelete={onDeleteContact}
              onEditContact={onEditContact}
            />
          );
        })}
      </section>
    </main>
  );
}
