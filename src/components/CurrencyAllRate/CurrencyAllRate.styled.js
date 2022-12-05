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
  width: 360px;
  border-radius: 15px;
  max-height: 80vh;
  overflow-y: auto;
  @media ${device.tablet} {
    width: 394px;
  }
  @media ${device.desktop} {
    width: 451px;
  }
`;
export const Caption = styled.p`
  color: #fff;
  width: 100%;
  padding: 10px;
  font-family: 'Poppins-Bold';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  text-transform: uppercase;
  background-color: var(--disable-bg-color);
`;
export const Table = styled.table`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-spacing: 0;

  overflow: hidden;
  background-color: var(--active-bg-color);
  color: var(--white);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) -8.67%,
    rgba(255, 255, 255, 0) 116.22%
  );
`;

export const Thead = styled.thead`
  font-family: 'Poppins-Regular';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;

  background-color: var(--disable-bg-color);
`;

export const Th = styled.th`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 6px;
  text-align: center;
  width: ${props => `${props.width}px`};

  &:last-child {
    padding-right: 6px;
  }

  @media ${device.tablet} {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    width: ${props => `${props.width + 12}px`};

    &:last-child {
      padding-right: 8px;
    }
  }
  @media ${device.desktop} {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    width: ${props => `${props.width + 20}px`};

    &:last-child {
      padding-right: 10px;
    }
  }
`;

export const Tbody = styled.tbody`
  height: 100%;
  background-color: var(--active-bg-color);
`;

export const Td = styled.td`
  width: ${props => `${props.width}px`};
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 6px;

  font-family: 'Poppins-Regular';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    cursor: copy;
  }

  &:last-child {
    padding-right: 6px;
  }

  @media ${device.tablet} {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    width: ${props => `${props.width + 10}px`};

    &:last-child {
      padding-right: 8px;
    }
  }

  @media ${device.desktop} {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    width: ${props => `${props.width + 20}px`};

    &:last-child {
      padding-right: 10px;
    }
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
