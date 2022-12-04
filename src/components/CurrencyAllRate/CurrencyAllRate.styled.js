import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';
export const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  
`;

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  width: 280px;
  border-radius: 3px;
  max-height: 80vh;
  overflow-y: auto;
  @media ${device.tablet} {
    width: 336px;
    border-radius: 3px;
  }
  @media ${device.desktop} {
    width: 393px;
  }
`;
export const Caption = styled.p`
  color: #fff;
  width: 100%;
  font-size: 12px;
  background-color: var(--disable-bg-color);
`;
export const Table = styled.table`
 
  border-spacing: 20px solid var(--active-bg-color);
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: var(--active-bg-color);
  color: var(--white);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) -8.67%,
    rgba(255, 255, 255, 0) 116.22%
  );

  @media ${device.tablet} {
    margin: 0;
    border-bottom: 22px solid var(--active-bg-color);
  }

  @media ${device.desktop} {
    margin: 0;

    width: 393px;

    border-spacing: 40px solid var(--active-bg-color);

    border-bottom: 143px solid var(--active-bg-color);
  }
`;

export const Thead = styled.thead`
  font-weight: 500;
  font-size: 14px;
  background-color: var(--disable-bg-color);
`;

export const Th = styled.th`
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
  width: ${props => `${props.width}px`};
  @media ${device.tablet} {
    padding-top: 6px;
    padding-bottom: 6px;
    width: ${props => `${props.width + 12}px`};
  }
  @media ${device.desktop} {
    padding-top: 8px;
    padding-bottom: 8px;
    width: ${props => `${props.width + 20}px`};
  }
`;

export const Tbody = styled.tbody`
  height: 100%;
  background-color: var(--active-bg-color);
`;

export const Td = styled.td`
  font-size: 12px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  width: ${props => `${props.width}px`};
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    cursor: copy;
  }

  @media ${device.tablet} {
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 6px;
    width: ${props => `${props.width + 10}px`};
  }

  @media ${device.desktop} {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    width: ${props => `${props.width + 20}px`};
  }
`;

export const Tr = styled.tr`
  border: 0;
`;
export const Btn = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  background-color: var(--active-bg-color);
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;
export const About = styled.a`
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  background-color: var(--disable-bg-color);
  border: 0.5px solid;
  border-radius: 50%;
  cursor: help;
`;