import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { NavLink } from 'react-router-dom';
import { device } from 'stylesheet/breakpoints';

export const Box = styled.div`
  display: flex;
  padding: 12px 0;
  margin-bottom: 28px;
  justify-content: center;

  @media ${device.tabDesk} {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--black);

  :not(:last-child) {
    @media ${device.mobile} {
      margin-right: 30px;
      margin-bottom: 0;
    }
    margin-bottom: 12px;
  }

  @media ${device.tabDesk} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Text = styled.span`
  @media ${device.mobile} {
    display: none;
  }

  font-family: 'Poppins-Regular';
  font-size: 18px;
  line-height: 1.5;

  ${StyledLink}.active & {
    font-family: 'Poppins-Bold';
    font-weight: 700;
  }
`;

export const Icon = styled(SVG)`
  /* padding: 3px; */

  fill: var(--disable-bg-color);

  ${StyledLink}.active & {
    fill: var(--active-bg-color);
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }

  @media ${device.tabDesk} {
    margin-right: 20px;
  }
`;

export const CurrencyIcon = styled(SVG)`
  /* padding: 3px; */

  fill: var(--disable-bg-color);

  ${StyledLink}.active & {
    fill: var(--active-bg-color);
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
`;
