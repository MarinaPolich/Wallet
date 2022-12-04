import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { device } from 'stylesheet/breakpoints';
import { desktop, tablet } from 'constants/responsive';

export const Box = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  background-color: var(--white);
`;

export const HeaderBox = styled.header`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 20px;

  @media ${device.tablet} {
    width: ${tablet}px;
    padding: 20px 32px;
  }

  @media ${device.desktop} {
    width: ${desktop}px;
    padding: 20px 16px;
  }
`;

export const LinkLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

export const LogoIcon = styled(SVG)`
  width: 30px;
  height: 30px;
  margin-right: 16px;

  @media ${device.tabDesk} {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;

export const LogoTitle = styled.h1`
  color: var(--black);
  font-family: 'Poppins Bold';
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
`;

export const BoxOut = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  color: var(--gray-4);
  font-size: 18px;
  line-height: 1.5;
`;

export const NameUser = styled.span`
  padding: 0 0 0 8px;
  position: relative;

  @media ${device.tabDesk} {
    padding-right: 12px;
    &::after {
      content: '';
      position: absolute;
      right: 0px;
      width: 1px;
      height: 30px;
      background-color: var(--gray-4);
    }
  }
`;

export const ButtonExit = styled.button`
  display: flex;
  flex-wrap: nowrap;
  align-items: unset;
  background-color: transparent;
  border: none;
  color: var(--gray-4);
  cursor: pointer;

  @media ${device.tabDesk} {
    padding-left: 12px;
  }
`;

export const ExitIcon = styled(SVG)`
  width: 18px;
  height: 20px;
  fill: var(--gray-4);

  @media ${device.tabDesk} {
    margin-right: 8px;
  }
`;
