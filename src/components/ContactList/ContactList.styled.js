import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  border: 1px solid Steelblue;
  border-radius: 5px;
  padding: 5px 5px;
  margin-top: 10px;
`;

export const ContactsList = styled.ul`
  color: Steelblue;
`;

export const ContactsListItem = styled.li`
  /* outline: 1px solid tomato; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactData = styled.p`
  /* outline: 1px solid tomato; */
  display: flex;
  align-items: center;
  padding: 5px 5px;
  color: Navy;
  &::before {
    content: '\u2022';
    /* padding-bottom: 5px; */
    margin-right: 10px;
    font-size: 26px;
    color: steelblue;
  }
`;

export const BtnDelete = styled.button`
  border: none;
  padding: 5px 20px;
  border-radius: 2px;
  color: white;
  background-color: SteelBlue;
`;
