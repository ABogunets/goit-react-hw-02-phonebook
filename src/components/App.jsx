import React, { Component } from 'react';
import { Container } from './App.styled';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => console.log('data :>> ', data);

  render() {
    return (
      <Container>
        <Form onFormData={this.formSubmitHandler} />
        <Contacts />
      </Container>
    );
  }
}
