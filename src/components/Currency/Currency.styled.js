import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';
import SVG from 'react-inlinesvg';

export const Box = styled.div`
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 10px;
  margin-left: auto;
  margin-right: auto;

  height: 200px;
  overflow: hidden;
  background-color: var(--active-bg-color);
  border-radius: 30px;

  @media ${device.tablet} {
    width: 336px;
    height: 210px;
  }

  @media ${device.desktop} {
    width: 393px;
    height: 393px;
  }
`;

export const Table = styled.table`
  width: 100%;
  height: 174px;
  border-spacing: 20px solid var(--active-bg-color);

  border-radius: 30px;
  overflow: hidden;

  line-height: 1.5;

  background-color: var(--active-bg-color);
  color: var(--white);

  @media ${device.tablet} {
    height: 174px;
    margin: 0;
    border-bottom: 12px solid var(--active-bg-color);
  }

  @media ${device.desktop} {
    margin: 0;
    width: 393px;
    border-spacing: 40px solid var(--active-bg-color);
    border-bottom: 1px solid var(--active-bg-color);
  }
`;

export const Thead = styled.thead`
  font-weight: 700;
  font-size: 18px;
  background-color: var(--disable-bg-color);
`;

export const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;

  @media ${device.desktop} {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const Tbody = styled.tbody`
  height: 100%;
  font-weight: 400;
  font-size: 16px;

  background-color: var(--active-bg-color);
`;

export const LoadBox = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const Td = styled.td`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;

  @media ${device.desktop} {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 40px;
  }
`;

export const Tr = styled.tr`
  border: 0;
`;
export const MoreInfo = styled.button`
  position: absolute;
  z-index: 1000;
  bottom: 0;
  left: 0;
  transform: translate(20px, -5px);
  background-color: var(--disable-bg-color);
  border: 0;
  border-radius: 30px;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  @media ${device.tablet} {
    transform: translate(20px, -10px);
  }
  @media ${device.desktop} {
    transform: translate(20px, -20px);
  }
`;

export const TableIcon = styled(SVG)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -25%);

  @media ${device.tablet} {
    transform: translate(0, -35%);
  }

  @media ${device.desktop} {
    transform: translate(0, 48%);
  }
`;
