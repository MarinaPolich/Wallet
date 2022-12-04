import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const Box = styled.div`
  @media ${device.tablet} {
    padding: 60px 0 196px 0;
  }
  @media ${device.desktop} {
    display: flex;
    justify-content: space-around;
    padding: 136px 0 116px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.desktop} {
    width: 533px;
    // position: fixed;
    // top: 0;
    // right: 0;
    /* width: calc(100% * 0.57); */
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }
`;

export const ImgBox = styled.div`
  display: flex;
  @media ${device.tablet} {
    flex-direction: row;
    margin-bottom: 50px;
    align-items: center;
    justify-content: center;
  }
  @media ${device.desktop} {
    flex-direction: column;
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
