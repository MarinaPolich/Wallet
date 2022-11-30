import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  /* transform: scale(0); */

  /* &.active {
    transform: scale(1);
  } */
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 20px;
  width: 540px;
  height: 508px;
  border-radius: 20px;
  background-color: #ffffff;
`;

export const ModalHead = styled.h1`
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;

  color: #000000;
`;

// FORM

export const ModalForm = styled(Form)`
  display: block;
`;

export const Operation = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const RadioField = styled(Field)`
  width: 30px;
  height: 30px;
`;

export const LabelIncome = styled.label`
  &:checked {
    background-color: red;
  }
`;

export const Marker = styled.div`
  position: relative;
  background-color: $font-secondary-color;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  z-index: 2;
  pointer-events: none;
  transform: translateX(1px);
  transition: transform 250ms linear;
`;

// export const RadioButton = styled.div`
//   display: flex;
//   justify-content: space-around;
//   text-align: center;
//   align-items: center;
//   border-radius: 30px;
//   width: 80px;
//   height: 40px;
//   border: 1px solid #e0e0e0;
// `;

// BUTTON

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const Btn = styled.div`
  display: block;
  /* font-family: 'Circe', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.3em;
  text-transform: uppercase; */
`;

export const ButtonAdd = styled.button`
  width: 300px;
  height: 50px;
  background-color: #24cca7;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 1000ms;

  &:hover {
    background-color: #ffffff;
    color: #24cca7;
    transition: 1000ms;
  }
`;

export const ButtonCancel = styled.button`
  width: 300px;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  color: #4a56e2;
  cursor: pointer;
  transition: 1000ms;
  &:hover {
    background-color: #4a56e2;
    color: #ffffff;
    transition: 1000ms;
  }
`;
