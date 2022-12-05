import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

// const colorActiveLable = 'green';

export const ModalHead = styled.h1`
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: 'Poppins Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;

  color: var(--black);
  @media ${device.mobile} {
    margin-top: -55px;
    margin-bottom: 40px;
  }
`;

// FORM RADIOBUTTON

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background-color: var(--white);
  border: none;
  margin: 20px;
  @media ${device.mobile} {
    display: none;
  }
`;
