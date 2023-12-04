import React from "react";
import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm.tsx";

export default function EditContactPopup({ card, isOpen, onClose, editContact, contactForRender}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    editContact(card, name, number, contactForRender)
    onClose()
    setName('')
    setNumber('')
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleNubmerChange(e) {
    setNumber(e.target.value);
  }

  return (
    <PopupWithForm
      name="-edit"
      title="Редактирование контакта"
      saveButtonTitle="Редактировать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="contact-name"
        name="name"
        className="popup__input"
        placeholder="Имя"
        required
        value={name || ''}
        onChange={handleNameChange}
      />
      <input
        name="number"
        id="contact-number"
        className="popup__input"
        placeholder="Номер телефона"
        type="text"
        required
        value={number || ''}
        onChange={handleNubmerChange}
      />
    </PopupWithForm>
  );
}
