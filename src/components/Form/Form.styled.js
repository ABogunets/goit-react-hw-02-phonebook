import styled from 'styled-components';

export const FormWrapper = styled.form`
  border: 1px solid SteelBlue;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 5px 100px 5px 5px;
`;

export const NameLabel = styled.label`
  /* outline: 1px solid orange; */
  /* width: 250px; */
  padding: 5px 5px;
  color: Navy;
`;

export const NameInput = styled.input`
  border: none;
  padding: 5px 5px;
  &:focus {
    outline: 2px solid SteelBlue;
  }
`;

export const NumberLabel = styled.label`
  /* outline: 1px solid orange; */
  padding: 5px 5px;
  color: Navy;
`;

export const NumberInput = styled.input`
  border: none;
  padding: 5px 5px;
  &:focus {
    outline: 2px solid SteelBlue;
  }
`;

export const SubmitBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border: none;
  padding: 5px 20px;
  border-radius: 5px;
  color: white;
  background-color: SteelBlue;
`;
