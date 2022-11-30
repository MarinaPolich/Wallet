import styled from '@emotion/styled';
import SVG from 'react-inlinesvg';
import { device } from 'stylesheet/breakpoints';

export const Button = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: #24cca7;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  border: none;
  cursor: pointer;

  @media ${device.tabDesk} {
    right: 40px;
    bottom: 40px;
  }
`;
export const SpanBtn = styled.span`
  /* position: absolute;
  top: 22%;
  left: 25%;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  color: #ffffff;
  font-size: 40px;
  font-weight: 100; 
  text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled(SVG)`
  width: 20px;
  height: 20px;
  fill: var(--white);
`;
