import React from "react";

export default function Card({ card, onEditContact, onContactDelete }) {
  return (
    <div className="element">
      <div className="card__contact">
        <h2 className="card__name">Имя: {card.name}</h2>
        <h2 className="card__number">Номер телефона: {card.number}</h2>
        <button type="button" onClick={() => onEditContact(card)}>
          Редактировать контакт
        </button>
        <button
        className="element__delete"
        type="button"
        onClick={() => onContactDelete(card)}
      >
        Удалить контакт
      </button>
      </div>
    </div>
  );
}
