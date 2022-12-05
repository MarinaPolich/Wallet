import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const Box = styled.section`
    height: 100vh;
  @media ${device.tablet} {
    padding: 60px 0 196px 0;
  }
  @media ${device.desktop} {
    display: flex;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.desktop} {
     width: 100%;
    height: 100vh;
      background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }
`;

export const ImgBox = styled.div`
  display: flex;
   align-items: center;
    justify-content: center;
  @media ${device.tablet} {
    flex-direction: row;
    margin-bottom: 50px;
   
  }
  @media ${device.desktop} {
    flex-direction: column;
    width: 100%;
  }
`;
export const Title = styled.h2`
  @media ${device.tablet} {
    flex-direction: row;
    margin-left: 40px;
  }
  @media ${device.desktop} {
    margin-top: 28px;
  }

  font-family: 'Poppins Regular';
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: var(--black);
`;
