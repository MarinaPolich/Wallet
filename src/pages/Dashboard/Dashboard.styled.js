import { desktop, tablet } from 'constants/responsive';
import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 60px;

  @media ${device.tabDesk} {
    height: 100vh;
    padding-top: 80px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 12px 20px;

  @media ${device.mobile} {
    max-height: calc(100vh - 70px);
    overflow: auto;
  }

  @media ${device.tablet} {
    width: ${tablet}px;
    padding: 40px 32px;
  }

  @media ${device.desktop} {
    display: flex;
    width: ${desktop}px;
    padding: 40px 40px 40px 0;
  }
`;

export const AppBarBox = styled.div`
  margin-bottom: 32px;

  @media ${device.tablet} {
    display: flex;
    margin-bottom: 20px;
  }

  @media ${device.desktop} {
    height: 100vh;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 69px;
    border-right: 1px solid #e7e5f2;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
    margin-bottom: 0;
  }
`;

export const NavBox = styled.div`
  @media ${device.tablet} {
    margin-right: 32px;
  }

  @media ${device.desktop} {
    margin-right: 0;
    margin-bottom: 32px;
  }
`;
