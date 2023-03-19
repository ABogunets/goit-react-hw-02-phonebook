import React from 'react';
import {
  ContactsWrapper,
  ContactsList,
  ContactsListItem,
  ContactData,
  BtnDelete,
} from 'components/ContactList/ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsWrapper>
      <ContactsList>
        {contacts.map(({ id, name, number }) => (
          <ContactsListItem key={id}>
            <ContactData>
              {name}: {number}
            </ContactData>
            <BtnDelete onClick={() => onDeleteContact(id)}>Delete</BtnDelete>
          </ContactsListItem>
        ))}
      </ContactsList>
    </ContactsWrapper>
  );
};
