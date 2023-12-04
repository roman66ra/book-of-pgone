import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.tsx";
import Main from "../Main/Main.tsx";
import AddPlacePopup from "../AddContactPopup/AddContactPopup.tsx";
import EditContactPopup from "../EditContactPopup/EditContactPopup.tsx";
import DeleteContactPopup from "../DeleteContactPopup/DeleteContactPopup.tsx";

export default function App() {
  const [contactForRender, setContactForRender] = useState([]);
  const [isAddContactPopupOpen, setIsAddContactPopupOpen] = useState(false);
  const [isEditContactPopupOpen, setIsEditContactPopupOpen] = useState(false);
  const [isDeleteContactPopupOnen, setIsDeleteContactPopupOpen] =
    useState(false);
  const [card, setCard] = useState("");

  function handleAddContactClick() {
    setIsAddContactPopupOpen(true);
  }

  function handleEditContactClick(card) {
    setCard(card);
    setIsEditContactPopupOpen(true);
  }

  function handleDeleteContactClick(card) {
    setCard(card);
    setIsDeleteContactPopupOpen(true);
  }

  function closeAllPopup() {
    setIsAddContactPopupOpen(false);
    setIsDeleteContactPopupOpen(false);
    setIsEditContactPopupOpen(false);
  }

  function addNewContact(contactForRender, data) {
    contactForRender.reverse();
    contactForRender.push({
      _id: contactForRender.length + 1,
      name: data.contactName,
      number: data.contactNumber,
    });
    contactForRender.reverse();
    setContactForRender(contactForRender);
  }

  function deleteContact(card, contactForRender) {
    console.log(contactForRender)
    const newContatsForRender = 
    contactForRender.reverse()
      .filter((index) => index._id !== card._id);
      console.log(newContatsForRender)
    setContactForRender(newContatsForRender.reverse())
  }

  function editContact(card, name, number, contactForRender) {

    const newContactsForRender = contactForRender
      .reverse()
      .map((contact) => {
        if (contact._id === card._id) {
          contact = { _id: card._id, name: name, number: number };
          return contact;
        } else {
          return contact;
        }
      });
    setContactForRender(newContactsForRender.reverse());

  }

  return (
    <div className="body">
      <Header />
      <Main
        contact={contactForRender}
        onEditContact={handleEditContactClick}
        onAddContact={handleAddContactClick}
        onDeleteContact={handleDeleteContactClick}
      ></Main>

      <AddPlacePopup
        contactForRender={contactForRender}
        isOpen={isAddContactPopupOpen}
        onClose={closeAllPopup}
        onAddNewContact={addNewContact}
      ></AddPlacePopup>
      <EditContactPopup
        card={card}
        isOpen={isEditContactPopupOpen}
        onClose={closeAllPopup}
        editContact={editContact}
        contactForRender={contactForRender}
      ></EditContactPopup>
      <DeleteContactPopup
        card={card}
        isOpen={isDeleteContactPopupOnen}
        onClose={closeAllPopup}
        deleteContact={deleteContact}
        contactForRender={contactForRender}
      ></DeleteContactPopup>
    </div>
  );
}
