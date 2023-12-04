import React from "react";

export default function PopupWithForm({
  name,
  title,
  saveButtonTitle,
  children,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <section className={`popup popup_place${name} ${isOpen && "popup_opened"}`}>
      <div className={`popup__container`}>
        <form
          className={`popup__form popup__form${name}`}
          name={`form${name}`}
          onSubmit={onSubmit}
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__save-button">
            {saveButtonTitle}
          </button>
          <button
            className={`popup__close-button popup__close-button_place${name}`}
            type="button"
            onClick={onClose}
          >
            Отмена
          </button>
        </form>
      </div>
    </section>
  );
}
