import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media ${device.desktop} {
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% * 0.57);
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }
`;
