import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm.tsx";

export default function DeleteContactPopup({
  card,
  isOpen,
  onClose,
  deleteContact,
  contactForRender,
}) {

  function handleSubmit(e) {
    e.preventDefault();
    deleteContact(card, contactForRender);
    onClose();

  }

  return (
    <PopupWithForm
          name="-delete"
          title="Удаление контакта"
          saveButtonTitle="Удалить"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit} 
          children={''}      />
  );
}
