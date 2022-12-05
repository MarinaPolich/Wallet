import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const ModalBox = styled.div`
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
  @media ${device.mobile} {
    background-color: var(--white);
    top: 8%;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 20px;
  width: 540px;
  height: 600px;
  border-radius: 20px;
  background-color: var(--white);
  @media ${device.mobile} {
    width: 320px;
  }
`;
