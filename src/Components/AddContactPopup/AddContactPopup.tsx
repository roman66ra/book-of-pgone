import React from "react";
import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm.tsx";

export default function AddContactPopup({ isOpen, onClose, onAddNewContact, contactForRender }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddNewContact(contactForRender, {
      contactName: name,
      contactNumber: number,
    });
    setName('')
    setNumber('')
    onClose()
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleNubmerChange(e) {
    setNumber(e.target.value);
  }

  return (
    <PopupWithForm
      name="-add"
      title="Новый контакт"
      saveButtonTitle="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="contact-name"
        name="name"
        className="popup__input popup__input_type_name-pict"
        placeholder="Имя"
        required
        value={name || ""}
        onChange={handleNameChange}
      />
      <input
        name="number"
        id="contact-number"
        className="popup__input popup__input_type_number"
        placeholder="Номер телефона"
        type="text"
        required
        value={number || ""}
        onChange={handleNubmerChange}
      />
    </PopupWithForm>
  );
}
