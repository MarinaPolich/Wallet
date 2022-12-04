import styled from '@emotion/styled';
import SVG from 'react-inlinesvg';
import { device } from 'stylesheet/breakpoints';

export const Button = styled.button`
  position: fixed;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled(SVG)`
  width: 20px;
  height: 20px;
  fill: var(--white);
`;
