import styled from 'styled-components';
import { Form, Field } from 'formik';
import DatePicker from 'react-datepicker';
import SVG from 'react-inlinesvg';
import { device } from 'stylesheet/breakpoints';

export const ErrorText = styled.div`
  color: red;
`;

export const ModalForm = styled(Form)`
  display: block;
  @media ${device.mobile} {
    width: 280px;
  }
`;

export const Operation = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-family: 'CirceBold', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
`;

export const LabelIncome = styled.label`
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  color: var(--gray-5);
  transition: 500ms;
  text-align: right;

  &:hover,
  :active {
    color: var(--btn-bg-color);
  }
`;

export const LabelExpense = styled.label`
  color: var(--gray-5);
  margin-left: 20px;
  text-align: right;
  position: relative;
  cursor: pointer;
  text-align: left;

  &:hover,
  :active {
    color: var(--error-color);
  }
`;

export const ToggleRb = styled.div`
  position: relative;
  height: 40px;
  width: 80px;
  background-color: var(--white);
  border: 1px solid var(--gray-5);
  border-radius: 30px;
  transition: all 500ms;
`;

export const Plus = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  background-color: var(--btn-bg-color);
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  top: -3px;
  left: 0;
  border-radius: 50%;
  transition: all 500ms;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadioFieldIncome = styled(Field)`
  display: none;

  &:checked ~ ${LabelIncome} {
    color: var(--btn-bg-color);
  }
`;

export const RadioFieldExpense = styled(Field)`
  display: none;

  &:checked {
    ~ ${LabelExpense} {
      color: var(--error-color);
    }
    ~ ${ToggleRb} > ${Plus} {
      left: 40px;
      background-color: var(--error-color);
      box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
    }
  }
`;

export const CloseIcon = styled(SVG)`
  left: 20%;
  width: 20px;
  height: 20px;
  fill: var(--white);
`;

// BUTTON

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
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.1em;
  background-color: var(--btn-bg-color);
  color: var(--white);
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  margin-top: 30px;
  cursor: pointer;
  transition: 500ms;

  &:hover {
    background-color: var(--white);
    color: var(--btn-bg-color);
    transition: 500ms;
    border: 1px solid var(--btn-bg-color);
  }
  @media ${device.mobile} {
    width: 280px;
    margin-top: 40px;
  }
`;

export const ButtonCancel = styled.button`
  width: 300px;
  height: 50px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  background-color: var(--white);
  border: 1px solid var(--active-bg-color);
  border-radius: 20px;
  color: var(--active-bg-color);
  cursor: pointer;
  transition: 500ms;
  &:hover {
    background-color: var(--active-bg-color);
    color: var(--white);
    transition: 500ms;
  }
  @media ${device.mobile} {
    width: 280px;
  }
`;

export const DateContainer = styled.div`
  position: relative;
`;

export const IconDate = styled.label`
  position: absolute;
  top: 60%;
  left: 80%;
  cursor: pointer;
  @media ${device.mobile} {
    left: 90%;
    top: 20%;
  }
`;

export const SvgDate = styled.svg`
  transition: 500ms;
  transform: scale(1);
  :hover {
    box-shadow: 0px 0px 23px -3px rgba(0, 0, 0, 0.75);
    transition: 500ms;
    transform: scale(1.1);
  }
`;

export const AmountDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media ${device.mobile} {
    display: block;
  }
`;
// Field

export const AmountField = styled(Field)`
  position: relative;
  padding: 8px;
  margin-top: 40px;
  text-align: center;
  border: 1px solid var(--gray-5);
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  &::placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 8px;
  }
  @media ${device.mobile} {
    width: 280px;
    margin-bottom: 40px;
  }
`;

export const DateField = styled(DatePicker)`
  outline: none;
  padding: 8px;
  margin-left: 35px;
  margin-top: 40px;
  border: 1px solid var(--gray-5);
  border-top: none;
  border-left: none;
  border-right: none;
  @media ${device.mobile} {
    width: 280px;
    margin: 0;
  }
`;

export const CommentField = styled(Field)`
  outline: none;
  padding: 8px;
  margin-top: 40px;
  border: 1px solid var(--gray-5);
  border-top: none;
  border-left: none;
  border-right: none;
  width: 400px;

  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  &::placeholder {
    color: var(--gray-4);
  }
  @media ${device.mobile} {
    width: 280px;
    margin-top: 40px;
  }
`;
