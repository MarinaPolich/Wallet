import styled from '@emotion/styled';

export const Form = styled.form`
  display: inline-block;
`;

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

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
